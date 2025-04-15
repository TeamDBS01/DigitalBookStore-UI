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
    // @Input() message!: string;
    @Input() review!: Review;
    @Input() canModify = false;
    @Input() userView = false;
    @Input() adminView = false;
    @Output() editing = new EventEmitter<boolean>();
    reasonForDelete = '';
    reasonValidation = false;
    
    display = "none";
    openModal() { this.display = 'block'}
    closeModal() { this.display = 'none'}
    
    constructor(private reviewService: ReviewService) { }

    editReview() {
        this.editing.emit(true);
    }
    deleteReview() {
        if (this.adminView && this.reasonForDelete === '') {
            this.reasonValidation = true;
            return;
        }
        this.reasonValidation = false;
        this.closeModal();
        this.reviewService.deleteReview(this.review.reviewId).subscribe({
            next: data => {
                window.location.reload();
            },
            error: err => console.error(err),
        })
    }
}
