import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryService } from 'src/user-admin/inventory/service/inventory.service';
import { OrderService as adminOrderService } from 'src/user-admin/order/service/order.service';
import { BookService } from 'src/user-customer/book/service/book.service';
import { OrderService as customerOrderService } from 'src/user-customer/order/service/order.service';
import { AllReviewsComponent } from 'src/user-customer/review/all-reviews/all-reviews.component';
import { AverageRatingComponent } from 'src/user-customer/review/average-rating/average-rating.component';
import { ReviewComponent } from 'src/user-customer/review/review/review.component';
import { StarsComponent } from 'src/user-customer/review/stars/stars.component';
import { ViewAllReviewsComponent } from 'src/user-customer/review/view-all-reviews/view-all-reviews.component';
import { AppComponent } from './app.component';
import { UserService } from 'src/user-customer/user/service/user.service';
import { ReviewService } from 'src/user-customer/review/service/review.service';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from 'src/user-customer/Home/navbar/navbar.component';
import { BookHeroComponent } from 'src/user-customer/Home/book-hero/book-hero.component';
import { BookCarouselComponent } from 'src/user-customer/Home/book-carousel/book-carousel.component';
import { ViewbookidComponent } from 'src/user-customer/book/viewbookid/viewbookid.component';
import { AddbookComponent } from 'src/user-customer/book/addbookreactiveform/addbook/addbook.component';
import { UpdatebookComponent } from 'src/user-customer/book/updatebook/updatebook/updatebook.component';

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
    ViewbookidComponent,
    AddbookComponent,
    UpdatebookComponent
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
