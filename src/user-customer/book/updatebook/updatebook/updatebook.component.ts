import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.sass'],
  standalone: false
})
export class UpdatebookComponent {
  book: Book=new Book();
  submitted=false;
  result!:string;
  formData: any;
 

  // constructor(private bookService: BookService){
  //   // bookService.getBookById(this.book.bookID).subscribe(data => {
  //   //   this.book.bookID = data.bookID;
  //   // });
  //   bookService.getBookById(this.book.bookID);
  //   this.bookService.getBookById(this.book).subscribe(data => {
  //     this.book.bookID=data['bookID'];
  //     this.book.title=data['title'];
  //     this.book.price=data['price'];
  //     this.book.authorID=data['authorID'];
  //     this.book.categoryID=data['categoryID'];
  //     this.book.base64img=data['base64img'];
  //   });
  // }

  constructor(private bookService: BookService) {
    this.book.bookID = this.bookService.getBookId(); // getEmpId() now returns a string

    this.bookService.getBookById(this.book.bookID).subscribe(data => {
      this.book.bookID=data['bookID'];
      this.book.title=data['title'];
      this.book.price=data['price'];
      this.book.authorID=data['authorID'];
      this.book.categoryID=data['categoryID'];
      this.book.base64img=data['base64img'];
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.patchValue({
          base64img: e.target.result // This is the Base64 string (Data URL)
        });
      };
      reader.readAsDataURL(file);
    } else {
      this.formData.patchValue({
        base64img: '' // Clear base64 if no file selected
      });
    }
    // console.log(this.formData.get('base64img').value);
    // console.log(this.base64img);
    // console.log(this.base64img.value);
  }


  update(){
    this.bookService.updateBook(this.book)
    .subscribe(data => {
      this.result=data;
    }, error => console.log(error));
    this.book=new Book();
  }

  onSubmit(){
    this.submitted=true;
    this.update();
  }
}
