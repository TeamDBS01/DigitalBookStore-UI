import { Component, Input } from '@angular/core';
import { UserService } from 'src/user-customer/user/service/user.service';
import { Review } from '../model/Review';
import { ReviewService } from '../service/review.service';

@Component({
    selector: 'app-reviews-by-book-id',
    templateUrl: './reviews-by-book-id.component.html',
    styleUrls: ['./reviews-by-book-id.component.sass'],
    standalone: false
})
export class ReviewsByBookIdComponent {

    constructor(public reviewService: ReviewService, public loginService: UserService) { }

    reviews!: Review[];
    userReview!: Review;
    @Input() bookId!: string;
    userId = this.reviewService.userId;

    ngOnInit() {
        this.reviewService.getReviewsByBookId(this.bookId).subscribe({
            next: data => {
                this.reviews = data;
                this.reviews = this.reviews.filter(review => {
                    if (review.userId !== this.userId) {
                        return true;
                    } else {
                        this.userReview = review;
                        return false;
                    }
                });
                console.log(data, this.reviews, this.userReview);
            },
            error: error => {
                if (!(error.error.text === `No Reviews with Book ID: ${this.bookId} Found!`)) {
                    console.error(error);
                } else {
                    this.reviews = [];
                }
            }
        })
    }
}
