import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../model/Book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

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
  totalItems: number = 0;
  pageSize: number = 10; // You can adjust the page size
  currentPage: number = 0;
  totalPages: number = 0;
  loading!:string;
  searchQuery: string = ''; // To potentially handle search pagination
  errorMessage: string = '';

  private unsubscribe$ = new Subject<void>();

  constructor(private bookService: BookService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadTotalPages(); // Load total number of pages from the backend
    this.loadBooks(this.currentPage, this.pageSize); // Load the initial page of books
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadTotalPages() {
    this.bookService.getNumberOfPages().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (total: number) => {
        this.totalItems = total;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize) > 0 ? Math.ceil(this.totalItems / this.pageSize) : 1;
        console.log('Total Items:', this.totalItems);
        console.log('Total Pages:', this.totalPages);
      },
      error: (error) => {
        console.error('Error loading total pages:', error);
        this.errorMessage = this.errorMessage || 'Failed to load total pages.';
      }
    });
  }

  loadBooks(page: number, size: number) {
    this.loading = 'Loading...'; // Set loading state
    this.bookService.getAllBooksWithPagination(page, size)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        this.books = data;
        this.loading = ''; // Reset loading state
        this.cdr.detectChanges(); // Ensure view is updated after data loads
        console.log(`Loaded Page ${page + 1} with ${data.length} items:`, this.books);
      }, error => {
        console.error('Error loading books for page:', error);
        this.loading = 'Error loading books.'; // Set error state
        this.errorMessage = 'Failed to load books.';
      });
  }

  display = 'none';
  delete(bookID: string) {
    this.bookService.bookID = bookID;
    this.display = 'block';
  }

  search() {
    this.bookService.getBook(this.book)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data) => {
          this.book = data;
          this.noRecordFound = false;
          this.submitted = true;
          this.books = []; // Clear paginated results
          this.totalPages = 0; // Reset pagination
        },
        error: (error) => {
          this.noRecordFound = true;
          this.book = new Book();
          this.submitted = true;
          this.books = []; // Clear paginated results
          this.totalPages = 0; // Reset pagination
          console.error('Error searching book:', error);
        }
      });
  }

  update(bookID: string) {
    this.bookService.bookID = bookID;
    this.router.navigate(["/updateBook"]);
  }

  onSubmit() {
    this.search();
  }

  onPageChange(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.loadBooks(this.currentPage, this.pageSize);
      console.log('Page Changed To:', this.currentPage);
    }
  }

  // This function is no longer directly used for initial load.
  // It might be adapted if you implement pagination for search results.
  loadAllBooks(): void {
    const params = { page: this.currentPage, size: this.pageSize };

    let observable: Observable<Book[]>;

    if (this.searchQuery.trim() === '') {
      observable = this.bookService.getAllBooksWithPagination(params.page, params.size);
    } else {
      observable = this.bookService.searchBooksByTitle(this.searchQuery); // Assuming a paginated search method exists
      // If search is not paginated, you'd need to handle totalPages differently for search results.
    }

    observable.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (data: Book[]) => {
        this.books = data;
        console.log('Books fetched (page ' + this.currentPage + '):', this.books);
      },
      error: (error) => {
        this.errorMessage = 'Failed to load books.';
        console.error('Error fetching books:', error);
      },
    });
  }
}