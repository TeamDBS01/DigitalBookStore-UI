import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    @Input() userView = false;
    @Input() adminView = false;
    @Output() editing = new EventEmitter<boolean>();
    reasonsForDelete = ["Choose a Reason", "Invalid", "Irrelevant", "Spam", "Bad Language"];
    reasonForDelete = this.reasonsForDelete[0];
    reasonValidation = false;

    display = "none";
    openModal() { this.display = 'block' }
    closeModal() { this.display = 'none' }

    constructor(private reviewService: ReviewService) { }

    editReview() {
        this.editing.emit(true);
    }
    deleteReview() {
        if (this.adminView && this.reasonForDelete === this.reasonsForDelete[0]) {
            this.reasonValidation = true;
        } else {
            this.reasonValidation = false;
            this.closeModal();
            if (this.adminView) {
                this.review.reason = this.reasonForDelete;
                this.reviewService.addReviewDelete(this.review).subscribe({
                    next: () => window.location.reload(),
                    error: err => console.error(err),
                })
            } else {
                this.reviewService.deleteReview(this.review.reviewId).subscribe({
                    next: () => window.location.reload(),
                    error: err => console.error(err),
                })
            }
        }
    }
}
