import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/user-customer/order/order-management/services/order.service';
import { UserService } from 'src/user-customer/user/service/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass'],
    standalone: false
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;
  cartSubscription: Subscription | undefined;

    isProfileMenuOpen = false;
    loggedInUserName: string | null = null;
    loggedInUserEmail: string | null = null;

    constructor(private userService: UserService, private router: Router, private orderService: OrderService) {}

    ngOnInit(): void {
        if (this.isLoggedIn()) {
            this.loggedInUserName = sessionStorage.getItem('name');  
            this.loggedInUserEmail = sessionStorage.getItem('email');
        }
        this.loadCartCountOnInit();
        this.cartSubscription = this.orderService.cartItemsCount$.subscribe(count => {
          this.cartItemCount = count;
          console.log('Navbar Cart Count Updated:', this.cartItemCount); // Add this log
        });
    }

    ngOnDestroy(): void {
      if (this.cartSubscription) {
        this.cartSubscription.unsubscribe();
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

    private loadCartCountOnInit(): void {
      this.orderService.getCartItems().subscribe(
        items => {
          this.cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
          this.orderService['cartItemsCount'].next(this.cartItemCount); // Directly update BehaviorSubject
          console.log('Navbar Initial Cart Count:', this.cartItemCount); // Add this log
        },
        error => {
          console.error('Error loading initial cart items in Navbar:', error);
        }
      );
    }
  
}