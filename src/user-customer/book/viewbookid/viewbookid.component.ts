import { Component } from '@angular/core';
import { Book } from '../model/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-viewbookid',
  templateUrl: './viewbookid.component.html',
  styleUrls: ['./viewbookid.component.sass'],
  standalone: false
})
export class ViewbookidComponent {
  book:Book=new Book();
  noRecordFound=false;
  submitted=false;

  constructor(private bookService:BookService){}

  search(){
    this.bookService.getBook(this.book)
    .subscribe(data=>{
      this.book=data;
    });

    if(this.book.bookID){
      this.noRecordFound=true;
    }
  }

  onSubmit(){
    this.search();
    this.submitted=true;
  }
}
