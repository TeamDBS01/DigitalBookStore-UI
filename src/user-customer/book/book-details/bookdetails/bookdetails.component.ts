import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-bookdetails', standalone:false,
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.sass']
})
export class BookdetailsComponent {
  book: Book | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    console.log('Book ID:', bookId); // Add this line
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe((data: Book) => {


        this.book = data;

      });
    }
  }

}
