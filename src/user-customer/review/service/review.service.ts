import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Review } from '../model/Review';
    
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

    constructor(private http: HttpClient) {}

    apiReviewUrl = environment.apiHostUrl + '/review';

    private USER_ID = sessionStorage.getItem('userId');
    private reviewID!:number;
    private retreiveAllReviewsUrl = this.apiReviewUrl + '/all';
    private retreiveAllReviewsByBookIdUrl = this.apiReviewUrl + '/book/';
    private retreiveAllReviewsByUserIdUrl = this.apiReviewUrl + '/user/' + this.USER_ID;
    private updateReviewUrl = this.apiReviewUrl + '/update/' + this.USER_ID;
    private addReviewUrl = this.apiReviewUrl + '/add';
    private deleteReviewUrl = this.apiReviewUrl + '/delete/' + this.USER_ID + '/';
    private averageRatingUrl = this.apiReviewUrl + '/book/average/';


    getAllReviews() {
        return this.http.get<Review[]>(this.retreiveAllReviewsUrl);
    }

    addReview(review: Review) {
        return this.http.post<Review>(this.addReviewUrl, review);
    }

    updateReview(review: Review) {
        return this.http.put<Review>(this.updateReviewUrl, review);
    }

    getReviewsByBookId(bookId: string) {
        return this.http.get<Review[]>(this.retreiveAllReviewsByBookIdUrl + bookId);
    }

    getReviewsByUserId() {
        return this.http.get<Review[]>(this.retreiveAllReviewsByUserIdUrl);
    }

    getReviewById(reviewId: number) {
        return this.http.get<Review>(this.apiReviewUrl + "/" + reviewId);
    }

    getAverageRating(bookId: string) {
        return this.http.get<Array<number>>(this.averageRatingUrl + bookId);
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

    get userId():number {
        return Number(this.USER_ID);
    }

}
