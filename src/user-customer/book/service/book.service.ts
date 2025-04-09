import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../model/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiHostUrl=environment.apiHostUrl;
  bookID!:string;

  public getBookByIdURL=this.apiHostUrl+'/books'

  constructor(private http:HttpClient) { }
  public getBookById(book:any){
    this.bookID=book.bookID;
    return this.http.get<Book>(this.getBookByIdURL+'/'+book.bookID);
  }

  getAllBooks():Observable<Book[]> {
    return this.http.get<Book[]>(`${this.getBookByIdURL}`);
  }

  filterBooks(query: string): Observable<Book[]> {
    const url = query.trim() ? `${this.getBookByIdURL}/filter?author=${query.trim()}` : `${this.getBookByIdURL}`;
    return this.http.get<Book[]>(url);
  }
  searchBookByTitle(title: string): Observable<Book> {
    const url = title.trim() ? `${this.getBookByIdURL}/title/${title.trim()}` : this.getBookByIdURL;
    return this.http.get<Book>(url);
  }
  searchBooksByTitle(title: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.getBookByIdURL}/search/${title.trim()}`);
  }

  // filterBy(author: string, category: string): Observable<Book[]> {
  //   let params = new URLSearchParams();
  //   if (author) params.append('author', author);
  //   if (category) params.append('category', category);
  //   return this.http.get<Book[]>(`${this.getBookByIdURL}/filter?${params.toString()}`);
  // }
  filterBy(author: string, category: string): Observable<Book[]> {
    let params = new URLSearchParams();
    if (author) params.append('author', author);
    if (category) params.append('category', category);
    return this.http.get<Book[]>(`${this.getBookByIdURL}/filter?${params.toString()}`);
  }
}
