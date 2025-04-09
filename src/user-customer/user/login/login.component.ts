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

    email = ''
    password = ''
    invalidLogin = false


    constructor(private router: Router, private loginService: UserService) { }


    checkLogin() {
        if (this.loginService.authenticate(this.email, this.password)) {
            this.invalidLogin = false;
            this.router.navigate(['home'])
        } else
            this.invalidLogin = true
        this.email = '';
        this.password = '';
    }

}

// frontend/src/app/login/login.component.ts
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../service/user.service';

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.sass'],
//     standalone: false
// })
// export class LoginComponent {

//     email = ''; // Changed from username to email
//     password = '';
//     invalidLogin = false;

//     constructor(private router: Router, private loginService: UserService) { }

//     checkLogin() {
//         this.loginService.authenticate(this.email, this.password).subscribe(
//             (response) => {
//                 this.invalidLogin = false;
//                 this.router.navigate(['home']); // Redirect to the home page on successful login
//             },
//             (error) => {
//                 this.invalidLogin = true;
//                 console.error("Login error:", error);
//                 // Optionally, display a more specific error message based on the error response
//             }
//         );
//         this.email = '';
//         this.password = '';
//     }
// }