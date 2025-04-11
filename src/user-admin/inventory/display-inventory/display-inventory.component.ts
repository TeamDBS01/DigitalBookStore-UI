// display-inventory.component.ts
import { Component, OnInit } from '@angular/core';
import { Inventory } from '../model/Inventory';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-display-inventory',
  templateUrl: './display-inventory.component.html',
  styleUrls: ['./display-inventory.component.sass']
})
export class DisplayInventoryComponent implements OnInit {
  inventories: Inventory[] = [];
  totalItems: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;
  totalPages: number = -1;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.inventoryService.getPages().subscribe({
      next: data => {
        this.totalPages = data
        console.log(this.totalPages);
      }
    });
    this.loadInventory(this.currentPage, this.pageSize);
  }

  loadInventory(page: number, size: number) {
    this.inventoryService.getInventory(page, size).subscribe(data => {
      console.log(data);
      this.inventories = data;
      this.totalItems = data.length;
      // this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      
    });
  }
  
  onPageChange(page: number) {
    if (page >= 0 && page < this.totalPages) {
      // this.inventoryService.getInventory(page, this.pageSize).subscribe(data => {
        // this.inventories = data;
        // // this.totalItems = data.length;
        // this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        // });
        this.loadInventory(page, this.pageSize);
        this.currentPage = page;
    }
  }
}
