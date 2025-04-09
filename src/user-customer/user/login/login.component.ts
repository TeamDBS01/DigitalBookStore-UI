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

    username = ''
    password = ''
    invalidLogin = false


    constructor(private router: Router, private loginService: UserService) { }


    checkLogin() {
        if (this.loginService.authenticate(this.username, this.password)) {
            this.invalidLogin = false;
            this.router.navigate(['home'])
        } else
            this.invalidLogin = true
        this.username = '';
        this.password = '';
    }

}
