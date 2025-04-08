import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/user-customer/home/home/home.component';
import { AddReviewComponent } from 'src/user-customer/review/add-review/add-review.component';
import { AllReviewsComponent } from 'src/user-customer/review/all-reviews/all-reviews.component';
import { ViewAllReviewsComponent } from 'src/user-customer/review/view-all-reviews/view-all-reviews.component';
import { AuthAdminGuard } from 'src/user-customer/user/guard/auth-admin.guard';
import { LoginComponent } from 'src/user-customer/user/login/login.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate:[AuthAdminGuard]},
    {path: 'review/addReview', component: AddReviewComponent, canActivate:[AuthAdminGuard]},
    {path: 'review/all', component: ViewAllReviewsComponent, canActivate:[AuthAdminGuard]},
    {path: 'review/allReviews', component: AllReviewsComponent, canActivate:[AuthAdminGuard]},
    {path: '**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
