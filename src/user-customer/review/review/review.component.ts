import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../model/Review';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass'],
  standalone: false
})
export class ReviewComponent {
    @Input() review!: Review;
    @Input() canModify = false;

    constructor(private router: Router, private reviewService: ReviewService) {}

    editReview() {
        this.router.navigate(['review/updateReview'], { queryParams: { 'reviewId': this.review.reviewId } });
    }
    deleteReview() {
        if (!confirm('Are you sure you want to delete this review?')) {
            return;
        }
        this.reviewService.deleteReview(this.review.reviewId).subscribe({
            next: data => {
                console.log(data);
                this.router.navigate(['book-details', this.review.bookId]);
                window.location.reload();
            },
            error: err => console.error(err),
        })
    }
}
