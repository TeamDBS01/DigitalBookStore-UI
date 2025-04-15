import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  standalone:false,
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.sass']
})
export class NavbarAdminComponent {
    isDropdownOpen: boolean = false;

    constructor(private router: Router) { } 
  
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      console.log('Dropdown Open:', this.isDropdownOpen);
    }
  
    logout() {
      
      console.log('Logout clicked');
      this.isDropdownOpen = false; 
      this.router.navigate(['/login']); 
    }
  }