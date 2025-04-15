import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from 'src/user-admin/inventory/service/inventory.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-book-deal',
  templateUrl: './book-deal.component.html',
  styleUrls: ['./book-deal.component.sass']
})
export class BookDealComponent implements OnInit{

    @Input() book!: Book;
    quantity = 0;
    constructor(private inventoryService: InventoryService) {}
    
    ngOnInit() {
        this.inventoryService.getInventoryByBookID(this.book.bookID).subscribe({
            next: data => this.quantity = data.quantity
        })
    }
}
