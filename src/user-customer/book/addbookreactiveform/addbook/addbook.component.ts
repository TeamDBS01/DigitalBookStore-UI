import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../model/Book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.sass'],
  standalone: false
})
export class AddbookComponent {
  formData: any;
  result:any;
  book: Book=new Book()
  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    this.formData=new FormGroup(
{
 bookID: new FormControl("",Validators.compose(
   [Validators.required,
   Validators.minLength(5)]
 )),
 title:new FormControl("",Validators.compose(
   [
     Validators.required,
     Validators.pattern('[a-zA-Z]*')
   ]
 )),
 price:new FormControl("",Validators.compose(
   [
     Validators.required,
     Validators.minLength(4),
    //  ValidateEmpSalary
   ]
 )),
 authorID:new FormControl("",Validators.compose(
   [
     Validators.required
     
   ]
 )),
 categoryID:new FormControl("",Validators.compose(
  [
    Validators.required
  ]
  )),
  base64img:new FormControl("",Validators.compose(
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

  save(){
    this.bookService.registerBook(this.book)
    .subscribe(data => {
      console.log(data);
      this.result=data;
    }, error => console.log(error));
    this.book=new Book(); 
  }

  onSubmit(){
    this.book.bookID=this.formData.get('bookID').value;
    this.book.title=this.formData.get('title').value;
    this.book.price=this.formData.get('price').value;
    this.book.authorID=this.formData.get('authorID').value;
    this.book.categoryID=this.formData.get('categoryID').value;
    this.book.base64img=this.formData.get('base64img').value;
    console.log(this.book);
    console.log(this.formData.get('base64img').value);
    this.save();
  }

get bookID():FormControl{

  return this.formData.get('bookID');
}

get title():FormControl{

  return this.formData.get('title');
}

get price():FormControl{

  return this.formData.get('price');
}

get authorID():FormControl{
  return this.formData.get('authorID');
}

get categoryID():FormControl{
  return this.formData.get('categoryID');
}

get base64img():FormControl{
  return this.formData.get('base64img');
}

}
