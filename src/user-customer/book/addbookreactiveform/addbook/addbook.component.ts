import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../model/Book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.sass'],
  standalone: false
})
export class AddbookComponent implements OnInit {
  formData!: FormGroup;
  result: any;
  submitted=false;
  book: Book = new Book();
  imageSrc: string = '../../../../assets/img-upload3.png';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.formData = new FormGroup(
      {
        bookID: new FormControl("", Validators.compose(
          [Validators.required,
          Validators.minLength(4)]
        )),
        title: new FormControl("", Validators.compose(
          [
            Validators.required,
            Validators.pattern('[a-zA-Z ]*')
          ]
        )),
        price: new FormControl("", Validators.compose(
          [
            Validators.required,
            Validators.min(2),
            //  ValidateEmpSalary
          ]
        )),
        authorName: new FormControl("", Validators.compose(
          [
            Validators.minLength(2),
            Validators.required
          ]
        )),
        categoryName: new FormControl("", Validators.compose(
          [
            Validators.minLength(1),
            Validators.required
          ]
        )),
        description: new FormControl("", Validators.compose(
          [
            Validators.required
          ]
        )),
        base64img: new FormControl("", Validators.compose(
          [
            Validators.required
          ]
        ))
      }
    );
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.patchValue({
          base64img: e.target.result
        });
        // this.imageSrc = e.target.result; // Update image source for display
      };
      reader.readAsDataURL(file);
    } 
  }

  save() {
    this.book.bookID = this.formData.get('bookID')?.value;
    this.book.title = this.formData.get('title')?.value;
    this.book.price = this.formData.get('price')?.value;
    this.book.authorName = this.formData.get('authorName')?.value;
    this.book.categoryName = this.formData.get('categoryName')?.value;
    this.book.base64img = this.formData.get('base64img')?.value;
    this.book.description = this.formData.get('description')?.value;

    this.bookService.registerBook(this.book)
      .subscribe(data => {
        console.log(data);
        this.result = data;
        this.message = "Book added!"
        this.formData.reset(); // Optionally reset the form after successful save
        this.imageSrc = '../../../../assets/img-upload3.png'; // Reset displayed image after save
        this.book = new Book(); // Reset the book object for the next entry
      }, error => {
        console.log(error)
        this.message = error.error.text
      });
  }
  message! : string;

  onSubmit() {
    // The save() method now handles transferring form data to the book object
    this.save();
  }

  get bookID(): FormControl {
    return this.formData.get('bookID') as FormControl;
  }

  get title(): FormControl {
    return this.formData.get('title') as FormControl;
  }

  get price(): FormControl {
    return this.formData.get('price') as FormControl;
  }

  get authorName(): FormControl {
    return this.formData.get('authorName') as FormControl;
  }

  get categoryName(): FormControl {
    return this.formData.get('categoryName') as FormControl;
  }

  get base64img(): FormControl {
    return this.formData.get('base64img') as FormControl;
  }

  get description(): FormControl {
    return this.formData.get('description') as FormControl;
  }
}