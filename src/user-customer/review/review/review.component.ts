import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    // @Input() message!: string;
    @Input() review!: Review;
    @Input() canModify = false;
    @Input() userView = false;
    @Output() editing = new EventEmitter<boolean>();

    constructor(private router: Router, private reviewService: ReviewService) { }

    editReview() {
        this.editing.emit(true);
    }
    deleteReview() {
        if (!confirm('Are you sure you want to delete this review?')) {
            return;
        }
        this.reviewService.deleteReview(this.review.reviewId).subscribe({
            next: data => {
                window.location.reload();
            },
            error: err => console.error(err),
        })
    }
}
