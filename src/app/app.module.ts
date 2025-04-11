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
import { AllReviewsComponent } from 'src/user-customer/review/all-reviews/all-reviews.component';
import { ReviewComponent } from 'src/user-customer/review/review/review.component';
import { StarsComponent } from 'src/user-customer/review/stars/stars.component';
import { AverageRatingComponent } from 'src/user-customer/review/average-rating/average-rating.component';
// import { NavbarComponent } from 'src/user-customer/home/navbar/navbar.component';
import { NavbarComponent } from 'src/user-customer/Home/navbar/navbar.component';
// import { BookHeroComponent } from 'src/user-customer/home/book-hero/book-hero.component';
import { BookHeroComponent } from 'src/user-customer/Home/book-hero/book-hero.component';
// import { BookCarouselComponent } from 'src/user-customer/home/book-carousel/book-carousel.component';
import { BookCarouselComponent } from 'src/user-customer/Home/book-carousel/book-carousel.component';
// import { HomeComponent } from 'src/user-customer/home/home/home.component';
import { HomeComponent } from 'src/user-customer/Home/home/home.component';
import { LoginComponent } from 'src/user-customer/user/login/login.component';
import { AddReviewComponent } from 'src/user-customer/review/add-review/add-review.component';
import { DisplayInventoryComponent } from 'src/user-admin/inventory/display-inventory/display-inventory.component';
import { ViewByBookIDComponent } from 'src/user-admin/inventory/view-by-book-id/view-by-book-id.component';
import { UpdateQuantityComponent } from 'src/user-admin/inventory/update-quantity/update-quantity.component';
import { LeftSidebarComponent } from 'src/user-admin/Home/left-sidebar/left-sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainComponent } from 'src/user-admin/Home/main/main.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllReviewsComponent,
    AllReviewsComponent,
    ReviewComponent,
    StarsComponent,
    AverageRatingComponent,
    NavbarComponent,
    BookHeroComponent,
    BookCarouselComponent,
    HomeComponent,
    LoginComponent,
    AddReviewComponent,
    DisplayInventoryComponent,
    ViewByBookIDComponent,
    UpdateQuantityComponent,
    LeftSidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterOutlet,
    CommonModule
  ],
  providers: [BookService, UserService, customerOrderService, adminOrderService, InventoryService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
