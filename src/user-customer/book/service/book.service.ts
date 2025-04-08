import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../model/Book';
import { HttpClient } from '@angular/common/http';

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

}
