import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllReviewsComponent } from 'src/user-customer/review/view-all-reviews/view-all-reviews.component';
import { ReviewService } from 'src/user-customer/review/service/review.service';
import { BookService } from 'src/user-customer/book/service/book.service';
import { UserService } from 'src/user-customer/user/service/user.service';
import { OrderService as adminOrderService } from 'src/user-admin/order/service/order.service';
import { OrderService as customerOrderService } from 'src/user-customer/order/service/order.service';
import { InventoryService } from 'src/user-admin/inventory/service/inventory.service';
import { NavbarComponent } from 'src/user-customer/Home/navbar/navbar.component';
import { BookHeroComponent } from 'src/user-customer/Home/book-hero/book-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllReviewsComponent,
    NavbarComponent,
    BookHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BookService, UserService, customerOrderService, adminOrderService, InventoryService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
