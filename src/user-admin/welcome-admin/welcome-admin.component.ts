import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.sass'],
  standalone: false
})
export class WelcomeAdminComponent {
    adminName: string = 'Admin'; // You can fetch this dynamically
    adminImageUrl: string = 'assets/default-admin.png'; // Path to your default image
}
