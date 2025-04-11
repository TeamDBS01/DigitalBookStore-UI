import { Component, Input } from '@angular/core';
import { Review } from '../model/Review';
import { ReviewService } from '../service/review.service';
import { UserService } from 'src/user-customer/user/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass'],
  standalone: false
})
export class ReviewComponent {
    @Input() review!: Review;
    @Input() canModify = false;

    constructor(private router: Router) {}

    editReview() {
        if (!this.canModify) { alert('Unauthorized!') }
        this.router.navigate(['review/updateReview'], { queryParams: { 'reviewId': this.review.reviewId } });
    }
}
