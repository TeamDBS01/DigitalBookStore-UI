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
import { InventoryService } from 'src/user-admin/inventory/service/inventory.service';
import { AllReviewsComponent } from 'src/user-customer/review/all-reviews/all-reviews.component';
import { ReviewComponent } from 'src/user-customer/review/review/review.component';
import { StarsComponent } from 'src/user-customer/review/stars/stars.component';
import { AverageRatingComponent } from 'src/user-customer/review/average-rating/average-rating.component';
import { NavbarComponent } from 'src/user-customer/Home/navbar/navbar.component';
import { BookHeroComponent } from 'src/user-customer/Home/book-hero/book-hero.component';
import { BookCarouselComponent } from 'src/user-customer/Home/book-carousel/book-carousel.component';
import { HomeComponent } from 'src/user-customer/Home/home/home.component';
import { LoginComponent } from 'src/user-customer/user/login/login.component';
import { AddReviewComponent } from 'src/user-customer/review/add-review/add-review.component';
import { ViewbookidComponent } from 'src/user-customer/book/viewbookid/viewbookid.component';
import { AddbookComponent } from 'src/user-customer/book/addbookreactiveform/addbook/addbook.component';
import { UpdatebookComponent } from 'src/user-customer/book/updatebook/updatebook/updatebook.component';
import { SearchtitleComponent } from 'src/user-customer/book/searchtitle/searchtitle.component';
import { FilterComponent } from 'src/user-customer/book/filter/filter.component';
import { SearchbarComponent } from 'src/user-customer/book/search-bar/searchbar/searchbar.component';
import { OrderService } from 'src/user-customer/order/order-management/services/order.service';
import { BookInfoService } from 'src/user-customer/order/order-management/services/book-info.service';
import { OrderManagementComponent } from 'src/user-customer/order/order-management/order-management.component';
import { AddToCartComponent } from 'src/user-customer/order/order-management/components/add-to-cart/add-to-cart.component';
import { AdminReturnProcessComponent } from 'src/user-customer/order/order-management/components/admin-return-process/admin-return-process.component';
import { OrderDetailsComponent } from 'src/user-customer/order/order-management/components/order-details/order-details.component';
import { CartComponent } from 'src/user-customer/order/order-management/components/cart/cart.component';
import { OrderListComponent } from 'src/user-customer/order/order-management/components/order-list/order-list.component';
import { PaymentComponent } from 'src/user-customer/order/order-management/components/payment/payment.component';
import { PlaceOrderComponent } from 'src/user-customer/order/order-management/components/place-order/place-order.component';
import { UpdateTrackingComponent } from 'src/user-customer/order/order-management/components/update-tracking/update-tracking.component';
import { BookdetailsComponent } from 'src/user-customer/book/book-details/bookdetails/bookdetails.component';
import { SignupComponent } from 'src/user-customer/user/signup/signup.component';
 

import { ReviewsByBookIdComponent } from 'src/user-customer/review/reviews-by-book-id/reviews-by-book-id.component';
import { OrderTrackingComponent } from 'src/user-customer/order/order-management/components/order-tracking/order-tracking.component';

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
    AddReviewComponent,
    ViewbookidComponent,
    AddbookComponent,
    UpdatebookComponent,
    LoginComponent,
    SearchtitleComponent,
    FilterComponent,
    SearchbarComponent,
    ViewbookidComponent,
    BookdetailsComponent,
    OrderManagementComponent,
    AddToCartComponent,
    CartComponent,
    PlaceOrderComponent,
    OrderListComponent,
    OrderDetailsComponent,
    AdminReturnProcessComponent,
    PaymentComponent,
    UpdateTrackingComponent,
    PlaceOrderComponent,
    SignupComponent,
    ReviewsByBookIdComponent,
    OrderTrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     
  ],
  providers: [BookService, UserService, InventoryService, ReviewService, OrderService, BookInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

 
