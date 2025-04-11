import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../model/Review';
import { ReviewService } from '../service/review.service';
import { UserService } from 'src/user-customer/user/service/user.service';

@Component({
    selector: 'app-add-update-review',
    templateUrl: './add-update-review.component.html',
    styleUrls: ['./add-update-review.component.sass'],
    standalone: false
})
export class AddUpdateReviewComponent {

    formData: any;
    review!: Review;
    rating: number = 0;
    comment: string = '';
    userId = sessionStorage.getItem('userId');
    bookId!: string;
    errorMessage!: string;
    successMessage!: string;

    stars = [1, 2, 3, 4, 5];
    update!: boolean;

    constructor(private reviewService: ReviewService, private loginService: UserService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        document.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('rating-star')) {
                this.handleRatingClick(target, event);
            }
        });
        this.route.queryParams.subscribe(params => (params['reviewId']) ? this.reviewService.getReviewById(params['reviewId']).subscribe({
            next: data => {
                if (data.userId !== Number(this.userId) && !this.loginService.isAdmin()) {
                    this.returnHome();
                }
                if (params['added']) {
                    this.successMessage = "Review added successfully";
                }
                this.review = data;
                this.rating = this.review.rating;
                this.comment = this.review.comment;
                this.starsColor(this.review.rating);
                this.formData.patchValue({ comment: this.comment });
                this.update = true;
            },
            error: error => {
                if (error.error === `Review with ID: ${params['reviewId']} Not Found`)
                    alert('Review Not Found');
                console.error(error);
                this.router.navigate(['']);
            }
        }) : this.update = false);

        this.route.queryParams.subscribe(params => {
            if (params['bookId']) this.bookId = params['bookId'];
            else if (!params['reviewId']) this.returnHome();
        });
        this.formData = new FormGroup({
            comment: new FormControl(this.comment, Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(2000),
                Validators.pattern('^\\D.*')
            ])),
        });
    }

    handleEnter(event: KeyboardEvent): void { if (event.key === 'Enter') { this.onSubmit(this.formData.value); event.preventDefault(); } }

    handleRatingClick(starElement: HTMLElement, event: MouseEvent): void {
        const rect = starElement.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const starWidth = rect.width;

        let ratingValue = parseFloat(starElement.getAttribute("data-value") || "0");

        if (clickX < starWidth / 2) { ratingValue -= 0.5; }
        this.rating = ratingValue;

        this.starsColor(this.rating);
    }

    starsColor(rating: number) {
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
    
    returnHome() {
        alert('Error in URL');
        this.router.navigate(['']);
    }
    
    onSubmit(formData: any) {
        if (this.rating == 0) {
            this.errorMessage = "Rating is Required!";
            return;
        }
        if (this.review === undefined) {
            this.review = new Review();
        }
        this.review.rating = this.rating;
        this.review.comment = formData.comment;
        this.review.bookId = this.bookId || this.review.bookId;
        this.review.userId = Number(this.userId);
        if (!this.update) {
            this.reviewService.addReview(this.review).subscribe({
                next: data => {
                    this.router.navigate(['review/updateReview'], { queryParams: { 'reviewId': data.reviewId, 'added': true }});
            },
            error: error => {
                console.error(error)
                this.errorMessage = "Error adding review";
            }
        })
    } else {
        this.reviewService.updateReview(this.review).subscribe({
            next: data => {
                this.successMessage = "Review updated successfully";
            },
            error: error => {
                console.error(error)
                this.errorMessage = "Error adding review";
            }
        })
    }
    }
}
