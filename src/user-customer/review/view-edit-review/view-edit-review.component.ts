import { Component, Input } from '@angular/core';
import { Review } from '../model/Review';

@Component({
    selector: 'app-view-edit-review',
    templateUrl: './view-edit-review.component.html',
    styleUrls: ['./view-edit-review.component.sass'],
    standalone: false
})
export class ViewEditReviewComponent {
    constructor() { }
    @Input() bookId!: string;
    @Input() review!: Review;
    @Input() canModify = false;
    @Input() userView = false;
    message!: string;
    @Input() editing = false;

    receiveReview($event: Review) { this.review = $event }

    receiveEditStatus($event: boolean) { this.editing = $event }
    receiveMessage($event: string) { this.message = $event }
}
