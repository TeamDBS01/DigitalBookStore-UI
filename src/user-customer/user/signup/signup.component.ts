import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/User';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.sass'],
    standalone: false
})
export class SignupComponent {

    name = '';
    email = '';
    password = '';
    confirmPassword = '';
    registrationFailed = false;
    registrationErrorMessage = '';  

    constructor(private router: Router, private userService: UserService) { }

    signup() {
        if (this.password !== this.confirmPassword) {
            return;
        }

        const registrationRequest: Partial<User> = {
            name: this.name,
            email: this.email,
            password: this.confirmPassword
        };

        this.userService.registerUser(registrationRequest as User).subscribe(
            (response: User) => {
                // console.log('Registration successful:', response);
                this.router.navigate(['login']);
            },
            (error) => {
                console.error('Registration failed:', error);
                this.registrationFailed = true;
                if (error?.message) {  
                    this.registrationErrorMessage = error.message;
                } else if (error?.error?.message) {  
                    this.registrationErrorMessage = error.error.message;
                } else if (typeof error === 'string') {
                    this.registrationErrorMessage = error;
                } else {
                    this.registrationErrorMessage = 'An unexpected error occurred.';
                    alert(this.registrationErrorMessage);
                }
            }
        );
    }
}