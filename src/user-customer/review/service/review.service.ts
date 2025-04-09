import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Review } from '../model/Review';

// const httpOptions = {
    //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // }
    // class name {
    //     name!: string;
    //     title!: string;
    // }
    
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

    constructor(private http: HttpClient) {}

    apiReviewUrl = environment.apiHostUrl + '/review';

    private USER_ID = 11;
    private reviewID!:number;
    private retreiveAllReviewsUrl = this.apiReviewUrl + '/all';
    private addReviewUrl = this.apiReviewUrl + '/add';
    private deleteReviewUrl = this.apiReviewUrl + '/delete/' + this.USER_ID + '/';
    private averageRatingUrl = this.apiReviewUrl + '/book/average/';


    getAllReviews() {
        return this.http.get<Review[]>(this.retreiveAllReviewsUrl);
    }

    addReview(review: Review) {
        return this.http.post<Review>(this.addReviewUrl, review);
    }

    getAverageRating(bookId: string) {
        return this.http.get<number>(this.averageRatingUrl + bookId);
    }

    deleteReview(reviewId: number) {
        return this.http.delete<boolean>(this.deleteReviewUrl + reviewId);
    }

    getReviewId(): number {
        return this.reviewID;
    }
    setReviewId(id:number) {
        this.reviewID = id;
    }

    // getUserName(userId: number) {
    //     return this.http.get<name>(this.apiHostUrl + '/user/get-user/' + userId);
    // }
    // getBookTitle(bookId: string) {
    //     return this.http.get<name>(this.apiHostUrl + '/books/' + bookId);
    // }

}
