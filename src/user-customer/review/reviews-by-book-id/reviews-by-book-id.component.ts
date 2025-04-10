import { Component, Input } from '@angular/core';
import { Review } from '../model/Review';
import { ReviewService } from '../service/review.service';
import { UserService } from 'src/user-customer/user/service/user.service';

@Component({
  selector: 'app-reviews-by-book-id',
  templateUrl: './reviews-by-book-id.component.html',
  styleUrls: ['./reviews-by-book-id.component.sass']
})
export class ReviewsByBookIdComponent {

    constructor(public reviewService: ReviewService, public loginService: UserService) {}
    
    reviews!: Review[];
    @Input() bookId!: string;
    ngOnInit() {
        this.reviewService.getReviewsByBookId(this.bookId).subscribe({
            next: data => this.reviews = data,
            error: error => console.error(error)
        })
    }
}
