import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../model/Book';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-searchtitle', standalone: false,
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.sass']
})
export class SearchtitleComponent  {
  books: Book[] = [];
  searchQuery: string = '';
  constructor(private bookService: BookService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['searchQuery'];
    });
      this.fetchbooks();
    }
    fetchbooks(){
      if (this.searchQuery.trim() === '') {
        this.bookService.getAllBooks().subscribe((data: Book[]) => {
          this.books = data;
          console.log('Books fetched:', this.books);
  
        });
      } else {
        this.bookService.searchBooksByTitle(this.searchQuery).subscribe((data: Book[]) => {
          this.books = data;
          console.log('Books fetched:', this.books);
  
        });
    }
  }

  // onFilterChange(criteria: { author: string, category: string }) {
  //   this.bookService.filterBy(criteria.author, criteria.category).subscribe((data: Book[]) => {
  //     this.books = data;
  //   });
  // }
  onFilterChange(criteria: { author: string, category: string }) {
    this.bookService.filterBy(criteria.author, criteria.category).subscribe((data: Book[]) => {
      this.books = data;
      console.log('Filtered Books:', this.books);
    
    });
  }
}
