import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../shared/interfaces/book';


@Injectable({
  providedIn: 'root'
})
export class BookInfoService {
  private baseUrl = 'http://localhost:8082/dbs/order/'; 

  constructor(private http: HttpClient) { }

  getBookTitle(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}books/${bookId}`);
  }
}