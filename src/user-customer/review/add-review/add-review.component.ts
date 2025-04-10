import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { race } from 'rxjs';
import { ReviewService } from '../service/review.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../model/Review';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.sass'],
  standalone: false
})
export class AddReviewComponent {

    formData: any;
    error = false;
    userId = sessionStorage.getItem('userId');
    bookId!: string;
    errorMessage!: string;
    successMessage!: string;
    constructor(private reviewService: ReviewService, private route :ActivatedRoute) {}
    ngOnInit() {
        this.route.queryParams.subscribe(params => this.bookId = params['bookId']);
        this.formData = new FormGroup({
            rating: new FormControl('', Validators.compose([
                Validators.required,
                Validators.min(0.1),
                Validators.max(5)
            ])),
            comment: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(2000),
                Validators.pattern('^\\D.*')
            ])),
        });
    }

    onSubmit(formData: any) {
        let review = new Review();
        review.rating = formData.rating;
        review.comment = formData.comment;
        review.bookId = this.bookId;
        review.userId = Number(this.userId);
        // console.log(review);
        this.reviewService.addReview(review).subscribe({
            next: data => {
                console.log(data)
                this.successMessage = "Review added successfully";
            },
            error: error => {
                console.error(error)
                this.errorMessage = "Error adding review";
            }
        })
    }
}
