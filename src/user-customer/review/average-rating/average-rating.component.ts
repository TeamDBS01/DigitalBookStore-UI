import { Component, Input } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { Review } from '../model/Review';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.sass'],
  standalone: false
})
export class AverageRatingComponent {
    constructor(private reviewService: ReviewService) {}

    @Input() bookId!: string;
    averageRating!: number;

    ngOnInit() {
        this.reviewService.getAverageRating(this.bookId).subscribe({
            next: data => {
                this.averageRating = data;
            }, error: error => console.log(error)
        });
    }
}
