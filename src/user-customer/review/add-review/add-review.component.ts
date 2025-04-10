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
    rating: number = 0;
    userId = sessionStorage.getItem('userId');
    bookId!: string;
    errorMessage!: string;
    successMessage!: string;

    constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }

    disableEnter(event: KeyboardEvent): void { if (event.key === 'Enter') { event.preventDefault(); } }


    handleRatingClick(starElement: HTMLElement, event: MouseEvent): void {
        const rect = starElement.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const starWidth = rect.width;

        let ratingValue = parseFloat(starElement.getAttribute("data-value") || "0");

        if (clickX < starWidth / 2) {
            ratingValue -= 0.5;
        }

        this.rating = ratingValue;

        document.querySelectorAll('.rating-star').forEach(star => {
            const starValue = parseFloat(star.getAttribute("data-value") || "0");
            if (starValue <= Math.floor(this.rating)) {
                star.classList.add('fa-solid', 'fa-star');
                star.classList.remove('fa-star-half-stroke', 'fa-regular');
            } else if (starValue === Math.ceil(this.rating) && this.rating % 1 !== 0) {
                star.classList.add('fa-star-half-stroke', 'fa-regular');
                star.classList.remove('fa-solid', 'fa-star');
            } else {
                star.classList.add('fa-regular', 'fa-star');
                star.classList.remove('fa-solid', 'fa-star-half-stroke');
            }
        });
    }
    ngOnInit() {
        document.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('rating-star')) {
                this.handleRatingClick(target, event);
            }
        });

        this.route.queryParams.subscribe(params => this.bookId = params['bookId']);
        this.formData = new FormGroup({
            comment: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(2000),
                Validators.pattern('[^0-9].*')
            ])),
        });
    }

    onSubmit(formData: any) {
        let review = new Review();
        if (this.rating == 0) {
            this.errorMessage = "Rating is Required!";
            return;
        }
        review.rating = this.rating;
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
