import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
    standalone: false
})
export class LoginComponent {

    email = '';  
    password = '';
    invalidLogin = false;

    constructor(private router: Router, private loginService: UserService) { }

    ngOnInit() {
        if (sessionStorage.getItem('token')) {
            this.router.navigate(['']);
        }
    }

    checkLogin() {
        this.loginService.authenticate(this.email, this.password).subscribe(
            (response) => {
                this.invalidLogin = false;
                this.router.navigate(['home']); 
                 
            },
            (error) => {
                this.invalidLogin = true;
                console.error("Login error:", error);
                
            }
        );
        this.email = '';
        this.password = '';
    }
}