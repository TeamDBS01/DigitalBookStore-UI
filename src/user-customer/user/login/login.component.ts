// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../service/user.service';

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.sass']
// })
// export class LoginComponent {

//     username = ''
//     password = ''
//     invalidLogin = false


//     constructor(private router: Router, private loginService: UserService) { }


//     checkLogin() {
//         if (this.loginService.authenticate(this.username, this.password)) {
//             this.invalidLogin = false;
//             this.router.navigate(['home'])
//         } else
//             this.invalidLogin = true
//         this.username = '';
//         this.password = '';
//     }

// }

// frontend/src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent {

    email = '';  
    password = '';
    invalidLogin = false;

    constructor(private router: Router, private loginService: UserService) { }

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