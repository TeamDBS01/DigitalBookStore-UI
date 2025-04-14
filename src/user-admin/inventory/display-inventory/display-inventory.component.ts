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
  allInventories: Inventory[]=[];
  filteredInventories: Inventory[]=[];
  searchBookId: string='';
  inventories: Inventory[] = [];
  totalItems: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;
  totalPages: number = 0;

  isUpdateModalVisible: boolean = false; 
  selectedInventory: Inventory | null = null; 
  isDeleteModalVisible: boolean = false; 
  bookIdToDelete: string = ''; 

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
      this.inventories = data;
      this.totalItems = data.length;
      // this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      
    });
  }

  filterInventories(): void {
    if (!this.searchBookId) {
      this.filteredInventories = [...this.allInventories]; // Show all if search is empty
    } else {
      this.filteredInventories = this.allInventories.filter(inventory =>
        inventory.book_Id.toLowerCase().includes(this.searchBookId.toLowerCase())
      );
    }
    this.currentPage = 0; // Reset page on filter
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredInventories.length / this.pageSize);
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
  openUpdateModal(inventory: Inventory): void {
    this.selectedInventory = inventory;
    this.isUpdateModalVisible = true;
  }

  closeUpdateModal(): void {
    this.isUpdateModalVisible = false;
    this.selectedInventory = null;
  }

  handleInventoryChanged(): void {
    this.loadInventory(this.currentPage, this.pageSize);
  }

  openDeleteModal(bookID: string): void {
    this.bookIdToDelete = bookID;
    this.isDeleteModalVisible = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalVisible = false;
    this.bookIdToDelete = '';
  }

  handleItemDeleted(deletedBookID: string): void {
    console.log(`Book with ID ${deletedBookID} deleted successfully.`);
    this.loadInventory(this.currentPage, this.pageSize);
    this.closeDeleteModal();
  }
}
