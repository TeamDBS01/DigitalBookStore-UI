import { Component } from '@angular/core';
import { Review } from '../model/Review';
import { ReviewService } from '../service/review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-reviews',
  templateUrl: './view-all-reviews.component.html',
  styleUrls: ['./view-all-reviews.component.sass'],
  standalone:false
})
export class ViewAllReviewsComponent {
    reviews: Review[] = [];
    constructor(public reviewService: ReviewService, private router: Router) {
        reviewService.getAllReviews().subscribe({
            next: data => {
                this.reviews = data;
                console.log('Received: ', data);
            },
            error: error => {
                console.error('Error fetching reviews:', error)
            }
        });
    }
}
