import { Component, Input } from '@angular/core';
import { Review } from '../model/Review';

@Component({
  selector: 'app-review', standalone:false,
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass']
})
export class ReviewComponent {
    @Input() review!: Review;
}
