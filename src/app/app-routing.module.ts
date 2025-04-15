import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllorderstatusComponent } from 'src/user-admin/AdminOrder/allorderstatus/allorderstatus.component';
import { AdminHomeComponent } from 'src/user-admin/Home/admin-home/admin-home.component';
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
import { AllReviewsComponent } from 'src/user-customer/review/all-reviews/all-reviews.component';
import { ReviewsByUserIdComponent } from 'src/user-customer/review/reviews-by-user-id/reviews-by-user-id.component';
import { AuthAdminGuard } from 'src/user-customer/user/guard/auth-admin.guard';
import { AuthCustomerGuard } from 'src/user-customer/user/guard/auth-cust.guard ';
import { LoginComponent } from 'src/user-customer/user/login/login.component';
import { SignupComponent } from 'src/user-customer/user/signup/signup.component';
import { UserProfileComponent } from 'src/user-customer/user/user-profile/user-profile.component';

const routes: Routes = [

    { path: 'adminHome/getInventory', component: DisplayInventoryComponent },
    { path: 'getInventoryByBookID', component: ViewByBookIDComponent},
    { path: 'updateQuantity', component: UpdateQuantityComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent},
    { path:'adminHome',component:AdminHomeComponent,canActivate:[AuthAdminGuard]},
    { path: 'profile', component: UserProfileComponent },
    { path: 'yourReviews', component: ReviewsByUserIdComponent, canActivate: [AuthCustomerGuard], },
    { path: 'dashboard', redirectTo: 'home' },
    { path: 'books', component: ViewbookidComponent, canActivate: [AuthAdminGuard], },
    { path: 'reviews', component: AllReviewsComponent, canActivate: [AuthAdminGuard], },
    { path: 'getInventory', component: DisplayInventoryComponent, canActivate: [AuthAdminGuard], },
    { path: 'orders', component: AllorderstatusComponent, canActivate: [AuthAdminGuard], },
    { path: 'updateBook', component: UpdatebookComponent, canActivate: [AuthAdminGuard], },
    { path: 'book-details/:id', component: BookdetailsComponent, canActivate: [AuthCustomerGuard], },
    { path:'category-books', component:CategorybooksComponent, canActivate: [AuthCustomerGuard],},
    { path: 'category-books-list', component:CategorybookslistComponent},
    { path: 'search', component: SearchtitleComponent, canActivate: [AuthCustomerGuard], },
    { path: 'order/cart', component: CartComponent, canActivate: [AuthCustomerGuard], },
    { path: 'order/place', component: PlaceOrderComponent, canActivate: [AuthCustomerGuard], },
    { path: 'order/list', component: OrderListComponent, canActivate: [AuthCustomerGuard], },
    { path: 'order/details/:id', component: OrderDetailsComponent, canActivate: [AuthCustomerGuard], },
    { path: 'order/admin/return/:id', component: AdminReturnProcessComponent, canActivate: [AuthAdminGuard], },
    { path: 'order/admin/tracking/:id', component: UpdateTrackingComponent, canActivate: [AuthAdminGuard], },
    { path: 'order/payment/:id', component: PaymentComponent, canActivate: [AuthCustomerGuard], },
    { path: 'order/track/:id', component: OrderTrackingComponent, canActivate: [AuthCustomerGuard], },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    {path:'adminhome',component:AdminHomeComponent},
    {path:'allorderstatus',component:AllorderstatusComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {anchorScrolling: "enabled"})],
    exports: [RouterModule],
})
export class AppRoutingModule { }