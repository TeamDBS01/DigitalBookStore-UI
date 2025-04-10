import { Component, Input } from '@angular/core';
import { Review } from '../model/Review';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-reviews-by-book-id',
  templateUrl: './reviews-by-book-id.component.html',
  styleUrls: ['./reviews-by-book-id.component.sass']
})
export class ReviewsByBookIdComponent {

    constructor(private reviewService: ReviewService) {}
    
    reviews!: Review[];
    @Input() bookId!: string;
    ngOnInit() {
        this.reviewService.getReviewsByBookId(this.bookId).subscribe({
            next: data => {
                this.reviews = data
                console.log(this.reviews)
            },
            error: error => console.error(error)
        })
    }
}
