import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbookidComponent } from 'src/user-customer/book/viewbookid/viewbookid.component';
import { ViewAllReviewsComponent } from 'src/user-customer/review/view-all-reviews/view-all-reviews.component';

const routes: Routes = [
    {path: 'review/all', component: ViewAllReviewsComponent},
    {path: 'bookid', component:ViewbookidComponent},
    {path: '**', redirectTo:''}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
