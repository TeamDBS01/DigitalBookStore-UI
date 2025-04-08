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

    constructor(private http: HttpClient, private router: Router) {}
    
    authenticateURL: string = this.apiUrl + "/api/auth/";
    login = "login";
    register = "register";
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

    getUser(User: any) {
        return this.http.post<User>(this.authenticateURL + this.login, User);
    }

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
