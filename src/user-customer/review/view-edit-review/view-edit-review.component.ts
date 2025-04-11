import { Component, Input } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { UserService } from 'src/user-customer/user/service/user.service';
import { Review } from '../model/Review';

@Component({
  selector: 'app-view-edit-review',
  templateUrl: './view-edit-review.component.html',
  styleUrls: ['./view-edit-review.component.sass'],
  standalone: false
})
export class ViewEditReviewComponent {
    constructor() {}
    @Input() bookId!: string;
    @Input() review!: Review;
    @Input() canModify = false;
    editing = false;

    receiveEditStatus($event: boolean) { this.editing = $event }
}
