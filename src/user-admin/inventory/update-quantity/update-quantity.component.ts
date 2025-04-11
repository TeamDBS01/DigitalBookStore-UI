import { Component } from '@angular/core';
import { InventoryService } from '../service/inventory.service';
import { Inventory } from '../model/Inventory';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-quantity',
  templateUrl: './update-quantity.component.html',
  styleUrls: ['./update-quantity.component.sass'],
  standalone: false
})
export class UpdateQuantityComponent {
  

  book_Id: string = '';
  inventory: Inventory | null = null;
  errorMessage: string = '';
  updateQuantity: number = 0;
  responseMessage: string='';
  

  constructor(private inventoryService: InventoryService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params=> this.book_Id=params["bookID"]);
  }

  addQuantity(): void {
    if(this.updateQuantity>0) {
      this.inventoryService.updateAddInventory(this.book_Id, this.updateQuantity).subscribe({
        next: (response) => {
          this.responseMessage=response;
          this.errorMessage='';
          console.log('Quantity added successfuly');
        }, error: (error: any)=> {
          this.errorMessage='Error updating quantity';
          console.error('Error updating quantity: ', error);
          this.responseMessage='';
        }
      });
    } else {
      this.errorMessage='Quantity must be greator than 0';
    }
  }
  removeQuantity(): void {
    if(this.updateQuantity>0) {
      this.inventoryService.updateRemoveInventory(this.book_Id, this.updateQuantity).subscribe({
        next: (response) => {
          this.responseMessage=response;
          this.errorMessage='';
          console.log('Quantity removed successfully');
        }, 
        error:(error:any)=> {
          this.errorMessage='Error updating quantity';
          console.error('Error updating quantity:', error);
          this.responseMessage='';
        }
      });
    } else {
      this.errorMessage='Quantity must be greator than 0';
      this.responseMessage = '';
    }
  }
}
