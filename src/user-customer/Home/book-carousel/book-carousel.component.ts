import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/user-customer/book/model/Book';
import { BookService } from 'src/user-customer/book/service/book.service';

@Component({
  selector: 'app-book-carousel', standalone:false,
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.sass']
})
export class BookCarouselComponent {
  searchQuery: string = '';
  books!: Book[];

  constructor(private bookService: BookService, private router: Router) {}

}
