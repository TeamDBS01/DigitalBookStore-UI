import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/user-customer/Home/home/home.component';
import { BookdetailsComponent } from 'src/user-customer/book/book-details/bookdetails/bookdetails.component';
import { CategorybooksComponent } from 'src/user-customer/book/category-books/categorybooks/categorybooks.component';
import { CategorybookslistComponent } from 'src/user-customer/book/categorybookslist/categorybookslist/categorybookslist.component';
import { SearchtitleComponent } from 'src/user-customer/book/searchtitle/searchtitle.component';
import { ViewbookidComponent } from 'src/user-customer/book/viewbookid/viewbookid.component';
import { AdminReturnProcessComponent } from 'src/user-customer/order/order-management/components/admin-return-process/admin-return-process.component';
import { CartComponent } from 'src/user-customer/order/order-management/components/cart/cart.component';
import { OrderDetailsComponent } from 'src/user-customer/order/order-management/components/order-details/order-details.component';
import { OrderListComponent } from 'src/user-customer/order/order-management/components/order-list/order-list.component';
import { PaymentComponent } from 'src/user-customer/order/order-management/components/payment/payment.component';
import { PlaceOrderComponent } from 'src/user-customer/order/order-management/components/place-order/place-order.component';
import { UpdateTrackingComponent } from 'src/user-customer/order/order-management/components/update-tracking/update-tracking.component';
import { AddReviewComponent } from 'src/user-customer/review/add-review/add-review.component';
import { AllReviewsComponent } from 'src/user-customer/review/all-reviews/all-reviews.component';
import { ViewAllReviewsComponent } from 'src/user-customer/review/view-all-reviews/view-all-reviews.component';
import { AuthAdminGuard } from 'src/user-customer/user/guard/auth-admin.guard';
import { AuthCustomerGuard } from 'src/user-customer/user/guard/auth-cust.guard ';
import { LoginComponent } from 'src/user-customer/user/login/login.component';
import { SignupComponent } from 'src/user-customer/user/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthCustomerGuard ]},
  {
    path: 'review/addReview',
    component: AddReviewComponent,
    canActivate: [AuthCustomerGuard ],
  },
  {
    path: 'review/all',
    component: ViewAllReviewsComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path: 'review/allReviews',
    component: AllReviewsComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path: 'bookid',
    component: ViewbookidComponent,
    canActivate: [AuthAdminGuard],
  },
  {
    path: 'book-details/:id',
    component: BookdetailsComponent,
    canActivate: [AuthCustomerGuard ],
  },
  {
    path: 'search',
    component: SearchtitleComponent,
    canActivate: [AuthCustomerGuard],
  },
  { path: 'order/cart', component: CartComponent, canActivate: [AuthCustomerGuard], },
  { path: 'order/place', component: PlaceOrderComponent, canActivate: [AuthCustomerGuard], },
  { path: 'order/list', component: OrderListComponent, canActivate: [AuthCustomerGuard], },
  { path: 'order/details/:id', component: OrderDetailsComponent, canActivate: [AuthCustomerGuard ], },
  { path: 'order/admin/return/:id', component: AdminReturnProcessComponent, canActivate: [AuthAdminGuard], },
  { path: 'order/admin/tracking/:id', component: UpdateTrackingComponent, canActivate: [AuthAdminGuard], },
  { path: 'order/payment/:id', component: PaymentComponent, canActivate: [AuthCustomerGuard], },
  { path:'category-books', component:CategorybooksComponent, canActivate:[AuthCustomerGuard],},
  { path:'category-books-list',component:CategorybookslistComponent, canActivate:[AuthCustomerGuard],},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
