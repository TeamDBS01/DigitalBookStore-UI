import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayInventoryComponent } from 'src/user-admin/inventory/display-inventory/display-inventory.component';
import { UpdateQuantityComponent } from 'src/user-admin/inventory/update-quantity/update-quantity.component';
import { ViewByBookIDComponent } from 'src/user-admin/inventory/view-by-book-id/view-by-book-id.component';

import { HomeComponent } from 'src/user-customer/Home/home/home.component';
import { BookdetailsComponent } from 'src/user-customer/book/book-details/bookdetails/bookdetails.component';
import { CategorybooksComponent } from 'src/user-customer/book/category-books/categorybooks/categorybooks.component';
import { CategorybookslistComponent } from 'src/user-customer/book/categorybookslist/categorybookslist/categorybookslist.component';
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
import { AddUpdateReviewComponent } from 'src/user-customer/review/add-update-review/add-update-review.component';
import { AllReviewsComponent } from 'src/user-customer/review/all-reviews/all-reviews.component';
import { ReviewsByUserIdComponent } from 'src/user-customer/review/reviews-by-user-id/reviews-by-user-id.component';
import { ViewAllReviewsComponent } from 'src/user-customer/review/view-all-reviews/view-all-reviews.component';
import { AuthAdminGuard } from 'src/user-customer/user/guard/auth-admin.guard';
import { AuthCustomerGuard } from 'src/user-customer/user/guard/auth-cust.guard ';
import { LoginComponent } from 'src/user-customer/user/login/login.component';
import { SignupComponent } from 'src/user-customer/user/signup/signup.component';
import { UserProfileComponent } from 'src/user-customer/user/user-profile/user-profile.component';

const routes: Routes = [

	{ path: 'getInventory', component: DisplayInventoryComponent , canActivate: [AuthAdminGuard]},
	{ path: 'getInventoryByBookID', component: ViewByBookIDComponent, canActivate: [AuthAdminGuard] },
	{ path: 'updateQuantity', component: UpdateQuantityComponent, canActivate: [AuthAdminGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'home', component: HomeComponent, canActivate: [AuthCustomerGuard] },
	{ path: 'profile', component: UserProfileComponent },
	{ path: 'review/addReview', component: AddUpdateReviewComponent, canActivate: [AuthCustomerGuard], },
	{ path: 'review/updateReview', component: AddUpdateReviewComponent, canActivate: [AuthCustomerGuard], },
	{ path: 'review/user', component: ReviewsByUserIdComponent, canActivate: [AuthCustomerGuard], },
	{ path: 'review/all', component: ViewAllReviewsComponent, canActivate: [AuthAdminGuard], },
	{ path: 'review/allReviews', component: AllReviewsComponent, canActivate: [AuthAdminGuard], },
	{ path: 'bookid', component: ViewbookidComponent, canActivate: [AuthAdminGuard], },
	{ path: 'updateBook', component: UpdatebookComponent, canActivate: [AuthAdminGuard], },
	{ path: 'book-details/:id', component: BookdetailsComponent, canActivate: [AuthCustomerGuard], },
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
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }