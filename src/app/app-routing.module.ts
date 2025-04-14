import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from 'src/user-admin/Home/admin-home/admin-home.component';
import { MainComponent } from 'src/user-admin/Home/main/main.component';
import { MainComponent } from 'src/user-admin/Home/main/main.component';
import { DisplayInventoryComponent } from 'src/user-admin/inventory/display-inventory/display-inventory.component';
import { UpdateQuantityComponent } from 'src/user-admin/inventory/update-quantity/update-quantity.component';
import { ViewByBookIDComponent } from 'src/user-admin/inventory/view-by-book-id/view-by-book-id.component';

import { HomeComponent } from 'src/user-customer/Home/home/home.component';
import { BookdetailsComponent } from 'src/user-customer/book/book-details/bookdetails/bookdetails.component';
import { SearchtitleComponent } from 'src/user-customer/book/searchtitle/searchtitle.component';
import { UpdatebookComponent } from 'src/user-customer/book/updatebook/updatebook/updatebook.component';
import { ViewbookidComponent } from 'src/user-customer/book/viewbookid/viewbookid.component';
import { AdminReturnProcessComponent } from 'src/user-customer/order/order-management/components/admin-return-process/admin-return-process.component';
import { CartComponent } from 'src/user-customer/order/order-management/components/cart/cart.component';
import { OrderDetailsComponent } from 'src/user-customer/order/order-management/components/order-details/order-details.component';
import { OrderListComponent } from 'src/user-customer/order/order-management/components/order-list/order-list.component';
import { OrderTrackingComponent } from 'src/user-customer/order/order-management/components/order-tracking/order-tracking.component';
import { PaymentComponent } from 'src/user-customer/order/order-management/components/payment/payment.component';
import { PlaceOrderComponent } from 'src/user-customer/order/order-management/components/place-order/place-order.component';
import { UpdateTrackingComponent } from 'src/user-customer/order/order-management/components/update-tracking/update-tracking.component';
import { ReviewsByUserIdComponent } from 'src/user-customer/review/reviews-by-user-id/reviews-by-user-id.component';
import { AuthAdminGuard } from 'src/user-customer/user/guard/auth-admin.guard';
import { AuthCustomerGuard } from 'src/user-customer/user/guard/auth-cust.guard ';
import { LoginComponent } from 'src/user-customer/user/login/login.component';
import { SignupComponent } from 'src/user-customer/user/signup/signup.component';
import { UserProfileComponent } from 'src/user-customer/user/user-profile/user-profile.component';

const routes: Routes = [

    { path: 'getInventory', component: DisplayInventoryComponent },
    { path: 'getInventoryByBookID', component: ViewByBookIDComponent},
    { path: 'updateQuantity', component: UpdateQuantityComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent},
    { path:'adminHome',component:MainComponent,canActivate:[AuthAdminGuard]},
    { path: 'profile', component: UserProfileComponent },
    // { path: 'review/addReview', component: AddUpdateReviewComponent},
    // { path: 'review/updateReview', component: AddUpdateReviewComponent},
    { path: 'reviews', component: ReviewsByUserIdComponent},
    // { path: 'review/all', component: ViewAllReviewsComponent},
    // { path: 'review/allReviews', component: AllReviewsComponent},
    { path: 'bookid', component: ViewbookidComponent},
    { path: 'updateBook', component: UpdatebookComponent},
    { path: 'book-details/:id', component: BookdetailsComponent},
    { path: 'search', component: SearchtitleComponent},
    { path: 'order/cart', component: CartComponent},
    { path: 'order/place', component: PlaceOrderComponent},
    { path: 'order/list', component: OrderListComponent},
    { path: 'order/details/:id', component: OrderDetailsComponent},
    { path: 'order/admin/return/:id', component: AdminReturnProcessComponent},
    { path: 'order/admin/tracking/:id', component: UpdateTrackingComponent},
    { path: 'order/payment/:id', component: PaymentComponent},
    { path: 'order/track/:id', component: OrderTrackingComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    {path:'adminhome',component:AdminHomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }