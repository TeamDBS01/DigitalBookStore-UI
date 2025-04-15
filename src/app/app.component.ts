import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone:false
})
export class AppComponent  {
  title = 'DigitalBookStore-UI';
  
}

// export class AppComponent  implements OnInit {
//   title = 'DigitalBookStore-UI';
  

//     userRole: string='';

//   ngOnInit() {
  
// const role = sessionStorage.getItem('userRole');
//     this.userRole = role ? role : '';

//   }
  
  
// }

