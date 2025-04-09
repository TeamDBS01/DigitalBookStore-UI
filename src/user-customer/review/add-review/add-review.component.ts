import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { race } from 'rxjs';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-add-review', standalone:false,
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.sass']
})
export class AddReviewComponent {

    formData: any;
    constructor(private reviewService: ReviewService) { }
    ngOnInit() {
        this.formData = new FormGroup({
            rating: new FormControl('', Validators.compose([
                Validators.required,
                Validators.min(0.1),
                Validators.max(5)
            ])),
            comment: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(200)
            ])),
            bookId: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20)
            ])),
            userId: new FormControl('', Validators.compose([
                Validators.required,
                Validators.min(1)
            ]))
        });
    }

    onSubmit(formData: any) {
        this.reviewService.addReview(formData).subscribe({
            next: data => console.log(data),
            error: error => console.error(error)
        })
    }
}
