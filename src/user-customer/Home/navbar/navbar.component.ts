import { Component } from '@angular/core';
import { UserService } from 'src/user-customer/user/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
    constructor(private userService: UserService) {}
    isLoggedIn() {
        return this.userService.isUserLoggedIn();
    }
    logout() {
        this.userService.logOut();
    }
}
