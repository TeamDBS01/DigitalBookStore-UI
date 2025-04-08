import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/user-customer/Home/home/home.component';
import { AllReviewsComponent } from 'src/user-customer/review/all-reviews/all-reviews.component';
import { ViewAllReviewsComponent } from 'src/user-customer/review/view-all-reviews/view-all-reviews.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'review/all', component: ViewAllReviewsComponent},
    {path: 'review/allReviews', component: AllReviewsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
