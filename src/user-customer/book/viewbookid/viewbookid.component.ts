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
  books: Book[] = [];
  

  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.loadAllBooks(); // Call this method when the component initializes
  }

  loadAllBooks(): void {
    this.bookService.getAllBooks().subscribe(
      (data: Book[]) => {
        this.books = data; // Assign the fetched books to the 'books' array
      },
      (error) => {
        console.error('Error loading all books:', error);
        // Optionally display an error message to the user
      }
    );
  }

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
