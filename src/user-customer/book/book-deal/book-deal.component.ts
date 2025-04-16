import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from 'src/user-admin/inventory/service/inventory.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book-deal',
  templateUrl: './book-deal.component.html',
  styleUrls: ['./book-deal.component.sass'],
  standalone: false
})
export class BookDealComponent implements OnInit{

    @Input() book!: Book;
    quantity = 0;
    constructor(private inventoryService: InventoryService) {}

    price = 0;
    discount(price: number): number {
        const discount = [10, 25, 50, 75];
        const randomDiscount = discount[Math.floor(Math.random() * discount.length)];
        
        return price  * (1 - randomDiscount / 100);
    }
    ngOnInit() {
        this.inventoryService.getInventoryByBookID(this.book.bookID).subscribe({
            next: data => {
                this.quantity = data.quantity
                this.price = this.discount(this.book.price)
            }
        })
    }
}
