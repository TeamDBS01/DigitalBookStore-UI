import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../model/Book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewbookid',
  templateUrl: './viewbookid.component.html',
  styleUrls: ['./viewbookid.component.sass'],
  standalone: false
})
export class ViewbookidComponent implements OnInit, OnDestroy {
  book: Book = new Book();
  noRecordFound = false;
  submitted = false;
  books: Book[] = [];
  // totalItems: number = 0;
  // pageSize: number = 10;
  // currentPage: number = 0;
  // totalPages: number = 0;
  // searchBookId: string = '';
  // allBooks: Book[] = [];
  // filteredBooks: Book[] = [];
  loading = 'Loading...'

  private unsubscribe$ = new Subject<void>();

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    // this.loadTotalPages(); // Load total number of pages from the backend
    // this.loadBook(this.currentPage, this.pageSize); // Load the initial page of books
    this.loadAllBooks();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadAllBooks(): void {
    this.bookService.getAllBooks().subscribe(
    (data: Book[]) => {
    this.books = data;
    },
    (error) => {
      console.error('Error loading all books:', error);
    }
  );
  }
  
  // loadTotalPages() {
  //   this.bookService.getPages().pipe(takeUntil(this.unsubscribe$)).subscribe({
  //     next: (total: number) => {
  //       this.totalItems = total;
  //       this.totalPages = Math.ceil(this.totalItems / this.pageSize) > 0 ? Math.ceil(this.totalItems / this.pageSize) : 1;
  //       console.log('Total Items:', this.totalItems);
  //       console.log('Total Pages:', this.totalPages);
  //     },
  //     error: (error) => {
  //       console.error('Error loading total pages:', error);
  //     }
  //   });
  // }

  // loadBook(page: number, size: number) {
  //   this.bookService.getBook(page, size)
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe(data => {
  //       this.books = data;
  //       this.cdr.detectChanges();
  //       console.log(`Loaded Page ${page + 1} with ${data.length} items:`, this.books);
  //     }, error => {
  //       console.error('Error loading books for page:', error);
  //     });
  // }

  display = 'none';
  delete(bookID: string) {
    this.bookService.bookID = bookID;
    this.display = 'block';
  }

  search() {
    this.bookService.getBook(this.book) // Assuming this method exists and returns a Book
      .subscribe(data => {
        this.book = data;
      });

    if (this.book.bookID) {
      this.noRecordFound = true;
    }
  }

  update(bookID: string) {
    this.bookService.bookID = bookID;
    this.router.navigate(["/updateBook"]);
  }

  onSubmit() {
    this.search();
    this.submitted = true;
  }

  // onPageChange(page: number): void {
  //   if (page >= 0 && page < this.totalPages) {
  //     this.currentPage = page;
  //     this.loadBook(this.currentPage, this.pageSize);
  //     console.log('Page Changed To:', this.currentPage);
  //   }
  // }
}