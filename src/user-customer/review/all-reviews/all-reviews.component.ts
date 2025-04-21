import { Component } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { Review } from '../model/Review';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.sass'],
  standalone: false
})
export class AllReviewsComponent {

    constructor(private reviewService: ReviewService) {}

    reviews: Review[] = [];
    message = 'Loading...';

    ngOnInit() {
        this.reviewService.getAllReviews().subscribe({
            next: (data) => {
                this.reviews = data;
                this.message = ''
            },
            error: (error) => {
                this.message = 'No reviews found!'
            }
        });
    }

}
