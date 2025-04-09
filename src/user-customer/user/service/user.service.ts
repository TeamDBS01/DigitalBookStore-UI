import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/User';
import { Role } from '../model/role';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    apiUrl = environment.apiHostUrl;
    loginEndpoint = "/user/auth/login"; // Path defined in your API Gateway
    registerEndpoint = "/user/auth/register"; // Path for signup (will implement later)
    authenticateURL: string = this.apiUrl + this.loginEndpoint;

    constructor(private http: HttpClient, private router: Router) {}
    user!: User;
    authenticated: boolean = false;
    users!: User[];
    userFound: User = new User();;

    authenticate(username: string, password: string) {

        this.user = new User();
        this.user.name = username;
        this.user.password = password;

        // this.getUser(this.user).subscribe((data: any) => {
            // this.userFound.name = data.userName;
            // this.userFound.password = data.password;
            // this.userFound.role = data.role;
            this.userFound.name = 'admin';
            this.userFound.password = '1234';
            this.userFound.role = Role.ADMIN;
            if (this.user.name === this.userFound.name && this.user.password == this.userFound.password) {
                this.authenticated = true;
                sessionStorage.setItem('name', this.userFound.name);
                sessionStorage.setItem('role', this.userFound.role.toString());
            }
        // });
        //console.log("Authenticated:"+this.authenticated);
        return this.authenticated;
    }

    // getUser(User: any) {
    //     return this.http.post<User>(this.authenticateURL + this.login, User);
    // }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('name')
        let role = sessionStorage.getItem('role');
        return !(user === null && role === null);
    }

    isAdmin() {
        let role = sessionStorage.getItem('role');
        return (role === Role.ADMIN.toString());
    }

    logOut() {
        this.authenticated = false;
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('role')
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['login']);
    }
}

// // frontend/src/app/service/user.service.ts
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment.development';
// import { User } from '../model/User';
// import { Role } from '../model/role';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// @Injectable({
//     providedIn: 'root'
// })
// export class UserService {

//     apiUrl = environment.apiHostUrl;
//     loginEndpoint = "/user/auth/login";
//     registerEndpoint = "/user/auth/register";
//     authenticateURL: string = this.apiUrl + this.loginEndpoint;
//     registerURL: string = this.apiUrl + this.registerEndpoint;
//     user!: User;
//     authenticated: boolean = false;
//     users!: User[];
//     loggedInUser: User | null = null;

//     constructor(private http: HttpClient, private router: Router) {}

//     authenticate(email: string, password: string): Observable<User> {
//         const credentials = { email: email, password: password };
//         return this.http.post<User>(this.authenticateURL, credentials).pipe(
//             tap(
//                 (response: User) => {
//                     if (response && response.token && response.role) {
//                         this.authenticated = true;
//                         this.loggedInUser = response;
//                         sessionStorage.setItem('email', response.email);
//                         sessionStorage.setItem('token', response.token);
//                         sessionStorage.setItem('role', response.role);
//                     } else {
//                         this.authenticated = false;
//                         this.loggedInUser = null;
//                         sessionStorage.clear();
//                     }
//                 },
//                 (error) => {
//                     this.authenticated = false;
//                     this.loggedInUser = null;
//                     sessionStorage.clear();
//                     console.error("Login failed:", error);
//                     // Optionally, handle the error more specifically
//                 }
//             )
//         );
//     }

//     registerUser(user: User): Observable<User> {
//         return this.http.post<User>(this.registerURL, user);
//     }

//     isUserLoggedIn(): boolean {
//         return !!sessionStorage.getItem('token');
//     }

//     getLoggedInUserRole(): string | null {
//         return sessionStorage.getItem('role');
//     }

//     isAdmin(): boolean {
//         const role = this.getLoggedInUserRole();
//         return role === Role.ADMIN;
//     }

//     logOut() {
//         this.authenticated = false;
//         this.loggedInUser = null;
//         sessionStorage.removeItem('email');
//         sessionStorage.removeItem('token');
//         sessionStorage.removeItem('role');
//         sessionStorage.clear();
//         localStorage.clear();
//         this.router.navigate(['login']);
//     }
// }

// frontend/src/app/service/user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../model/User';
import { Role } from '../model/role';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
                        sessionStorage.setItem('userId', response.userId.toString());
                         
                    } else {
                        this.authenticated = false;
                        this.loggedInUser = null;
                        sessionStorage.clear();
                    }
                },
                (error) => {
                    this.authenticated = false;
                    this.loggedInUser = null;
                    sessionStorage.clear();
                    console.error("Login failed:", error);
                    // Optionally, handle the error more specifically
                }
            )
        );
    }

    registerUser(user: User): Observable<User> {
        return this.http.post<User>(this.registerURL, user);
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
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(['login']);
    }
}