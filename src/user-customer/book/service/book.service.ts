import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../model/Book';
import { HttpClient } from '@angular/common/http';
import { BookResponse } from '../model/BookResponse';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiHostUrl=environment.apiHostUrl;
  bookID!:string;

  public getBookByIdURL=this.apiHostUrl+'/books';
  private registerBookURL=this.apiHostUrl+'/books';
  private updateBookURL=this.apiHostUrl+'/book';

  constructor(private http:HttpClient) { }

  public getBookById(book:any){
    this.bookID=book.bookID;
    return this.http.get<Book>(this.getBookByIdURL+'/'+book.bookID);
  }
  public getBookId(){
    return this.bookID;
  }

  public registerBook(book:Book){
    return this.http.post<string>(this.registerBookURL +"/addBooks",book);
  }

  public updateBook(Book:any){
    return this.http.put<string>(this.updateBookURL+'/'+Book.bookID+'/'+Book.title, Book);
  }

}
