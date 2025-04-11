import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/user-customer/book/service/book.service';

@Component({
    selector: 'app-categorybooks',
    templateUrl: './categorybooks.component.html',
    styleUrls: ['./categorybooks.component.sass'],
    standalone: false
})
export class CategorybooksComponent {

    categories: { name: string }[] = [];

    constructor(private bookService: BookService, private router: Router) { }

    ngOnInit(): void {
        this.bookService.getAllCategories().subscribe((data: { name: string }[]) => {
            this.categories = data;
            console.log("categories:" + this.categories);
        });
    }


    navigateToCategory(category: { name: string }) {
        this.router.navigate(['/category-books-list'], { queryParams: { category: category } });
    }


}
