import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
    standalone: false
})
export class LoginComponent implements OnInit {

    email = '';
    password = '';
    invalidLogin = false;
    showWelcomePopup = false;
    loggedInUserName = '';
    invalidLoginMessage = '';

    constructor(private router: Router, private loginService: UserService) { }

    ngOnInit() {
        if (sessionStorage.getItem('token')) {
            const role = sessionStorage.getItem('role');
            this.navigateToBasedOnRole(role);
        }
    }

    checkLogin() {
        if (!this.email || !this.password) {
            this.invalidLogin = true;
            this.invalidLoginMessage = 'Email and password cannot be empty.';
            return;
        }

        this.loginService.authenticate(this.email, this.password).subscribe(
            (response) => {
                this.invalidLogin = false;
                this.invalidLoginMessage = '';
                this.loggedInUserName = response.name || response.email;
                this.showWelcomePopup = true;
                // setTimeout(() => {
                //     this.showWelcomePopup = false;
                    this.navigateToBasedOnRole(response.role);  
                // }, 2000);
            },
            (error) => {
                this.invalidLogin = true;
                console.error("Login error:", error);
                if (error && error.error && error.error.message) {
                    this.invalidLoginMessage = error.error.message;
                } else {
                    this.invalidLoginMessage = 'Invalid email or password. Please try again.';
                }
            }
        );
        this.email = '';
        this.password = '';
    }

    closeWelcomePopup() {
        const role = sessionStorage.getItem('role');
        this.showWelcomePopup = false;
        this.navigateToBasedOnRole(role);
    }

    navigateToBasedOnRole(role: string | null) {
        if (role === 'CUSTOMER') {
            this.router.navigate(['/home']);
        } else if (role === 'ADMIN') {
            this.router.navigate(['/adminHome']);
        } else {
            console.warn('Unknown role:', role);
            this.router.navigate(['/']);
        }
    }
}