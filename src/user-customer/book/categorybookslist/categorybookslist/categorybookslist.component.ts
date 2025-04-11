import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/user-customer/book/model/Book';
import { BookService } from 'src/user-customer/book/service/book.service';

@Component({
  selector: 'app-categorybookslist',
  templateUrl: './categorybookslist.component.html',
  styleUrls: ['./categorybookslist.component.sass'],
  standalone: false
})

export class CategorybookslistComponent{
  books: Book[] = [];
  category: string | null = null;
  searchQuery: string = '';

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.queryParamMap.get('category');
    console.log("categoryyy:"+this.category);
    if (this.category) {
      this.bookService.getBooksByCategory(this.category).subscribe((data: Book[]) => {
        console.log("BooksList:"+data);
        this.books = data;
      });
    }
  }
}
