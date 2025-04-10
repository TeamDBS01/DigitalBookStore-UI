// frontend/src/app/service/user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/User';
import { Role } from '../model/role';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    apiUrl = environment.apiHostUrl;
    loginEndpoint = "/user/auth/login";
    registerEndpoint = "/user/auth/register";
    authenticateURL: string = this.apiUrl + this.loginEndpoint;
    registerURL: string = this.apiUrl + this.registerEndpoint;
    user!: User;
    authenticated: boolean = false;
    users!: User[];
    loggedInUser: User | null = null;

    constructor(private http: HttpClient, private router: Router) {}

    authenticate(email: string, password: string): Observable<User> {
        const credentials = { email: email, password: password };
        return this.http.post<User>(this.authenticateURL, credentials).pipe(
            tap(
                (response: User) => {
                    if (response && response.token && response.role) {
                        this.authenticated = true;
                        this.loggedInUser = response;
                        sessionStorage.setItem('email', response.email);
                        sessionStorage.setItem('token', response.token);
                        sessionStorage.setItem('role', response.role);
                        sessionStorage.setItem('userId', response.userId?.toString() || '');
                        sessionStorage.setItem('name', response.name || '');  
                    } else {
                        this.authenticated = false;
                        this.loggedInUser = null;
                        sessionStorage.clear();
                    }
                },
                // Removed the error handling from tap, will handle in catchError
            ),
            catchError((error) => {
                this.authenticated = false;
                this.loggedInUser = null;
                sessionStorage.clear();
                console.error("Login failed:", error);
                alert("Invalid credentials");
                return throwError(() => error); // Re-throw the error
            })
        );
    }

    registerUser(user: User): Observable<User> {
        return this.http.post<User>(this.registerURL, user).pipe(
            tap(response => {
                
                if (response?.statusCode !== 200 && response?.statusCode !== 201) {
                    return throwError(() => response);  
                }
                return response;  
            }),
            catchError(error => {
                console.error("Registration error:", error);
                return throwError(() => error);  
            })
        );
    }

    isUserLoggedIn(): boolean {
        return !!sessionStorage.getItem('token');
    }

    getLoggedInUserRole(): string | null {
        return sessionStorage.getItem('role');
    }

    isAdmin(): boolean {
        const role = this.getLoggedInUserRole();
        return role === Role.ADMIN;
    }

    isCustomer(): boolean {
        const role = this.getLoggedInUserRole();
        return role === Role.CUSTOMER;
    }

    logOut() {
        this.authenticated = false;
        this.loggedInUser = null;
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('name');
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['login']);
    }
}