import { Component } from '@angular/core';
import { Review } from '../model/Review';

@Component({
  selector: 'app-reviews-deleted',
  templateUrl: './reviews-deleted.component.html',
  styleUrls: ['./reviews-deleted.component.sass'],
  standalone: false
})
export class ReviewsDeletedComponent {
    reviews!: Review[];
}
