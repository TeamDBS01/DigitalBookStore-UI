import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/Book';

@Component({
  selector: 'app-searchbar', standalone:false,
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent {
  searchQuery: string = '';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  searchBooks() {
    console.log('Search Query:', this.searchQuery);

    if (this.searchQuery.trim() === '') {
      this.bookService.getAllBooks().subscribe((data: Book[]) => {
        this.books = data;
      });
    } else {
      this.bookService.filterBooks(this.searchQuery).subscribe((data: Book[]) => {
        this.books = data;
      });
    }
  }
}
