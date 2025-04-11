import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/Book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';
import { SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.sass']
})
export class BookdetailsComponent implements OnInit {
  book: Book | undefined;
  sampleChapterUrl: SafeResourceUrl | null = null;
  isPopupVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    console.log('Book ID:', bookId);
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe((data: Book) => {
        this.book = data;
      });
    }
  }

  loadSampleChapter(): void {
    if (this.book && this.book.bookID) {
      this.bookService.loadSampleChapter(this.book.bookID).subscribe(url => {
        this.sampleChapterUrl = url;
        this.openSampleChapterPopup(); 
      });
    }
  }

  openSampleChapterPopup() {
    this.isPopupVisible = true;
    const popupContainer = document.getElementById('iframePopupContainer');
    if (popupContainer) {
      popupContainer.classList.add('show');
    }
  }

  closeSampleChapterPopup() {
    console.log('closeSampleChapterPopup() is being called!');
    this.isPopupVisible = false;
    const popupContainer = document.getElementById('iframePopupContainer');
    console.log('popupContainer element:', popupContainer);
    if (popupContainer) {
      popupContainer.classList.remove('show');
    }
  }
}
