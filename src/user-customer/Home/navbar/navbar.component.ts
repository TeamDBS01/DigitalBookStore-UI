import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/user-customer/user/service/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass'],
    standalone: false
})
export class NavbarComponent implements OnInit {
    isProfileMenuOpen = false;
    loggedInUserName: string | null = null;
    loggedInUserEmail: string | null = null;

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {
        if (this.isLoggedIn()) {
            this.loggedInUserName = sessionStorage.getItem('name');  
            this.loggedInUserEmail = sessionStorage.getItem('email');
        }
    }

    isLoggedIn() {
        return this.userService.isUserLoggedIn();
    }

    toggleProfileMenu() {
        this.isProfileMenuOpen = !this.isProfileMenuOpen;
    }

    logout() {
        this.userService.logOut();
        this.isProfileMenuOpen = false;  
    }

    goToProfile() {
        this.router.navigate(['/profile']);  
        this.isProfileMenuOpen = false;  
    }

    getInitials(): string {
        if (this.loggedInUserName) {
            const names = this.loggedInUserName.split(' ');
            let initials = '';
            for (let i = 0; i < Math.min(2, names.length); i++) {
                initials += names[i].charAt(0).toUpperCase();
            }
            return initials;
        }
        return '';
    }

    getLoggedInUserName(): string | null {
        return this.loggedInUserName;
    }

    getLoggedInUserEmail(): string | null {
        return this.loggedInUserEmail;
    }
}