import { Component } from '@angular/core';
import { Book } from 'src/user-customer/book/model/Book';
import { BookService } from 'src/user-customer/book/service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  standalone: false
})
export class HomeComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadCarouselBooks();
  }

  loadCarouselBooks(): void {
    this.bookService.getAllBooks().subscribe(
      (data: Book[]) => {
        // Take the first 5 or however many you want for the carousel
        this.books = data.slice(0, 5);
        console.log('Carousel Books:', this.books);
      },
      (error:any) => {
        console.error('Error loading all books:', error);
      }
    );
  }

  
}
