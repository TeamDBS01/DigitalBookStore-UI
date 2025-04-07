import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllReviewsComponent } from 'src/customer/review/view-all-reviews/view-all-reviews.component';

const routes: Routes = [
    {path: 'review/all', component: ViewAllReviewsComponent},
    {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
