import { Component, Input } from '@angular/core';
import { Review } from '../model/Review';
import { ReviewService } from '../service/review.service';
import { UserService } from 'src/user-customer/user/service/user.service';

@Component({
  selector: 'app-reviews-by-book-id',
  templateUrl: './reviews-by-book-id.component.html',
  styleUrls: ['./reviews-by-book-id.component.sass'],
  standalone: false
})
export class ReviewsByBookIdComponent {

    constructor(public reviewService: ReviewService, public loginService: UserService) {}
    
    reviews!: Review[];
    @Input() bookId!: string;
    ngOnInit() {
        try {
            this.reviewService.getReviewsByBookId(this.bookId).subscribe({
            next: data => this.reviews = data,
            error: error => {
                if (!(error.error === `No Reviews with Book ID: ${this.bookId} Found!`)) {
                    console.error(error);
                }
            }
        })
        } catch (error) {
            console.log(error);
        }
    }
}
