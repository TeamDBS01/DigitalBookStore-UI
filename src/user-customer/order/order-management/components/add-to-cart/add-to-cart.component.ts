import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { CartItem } from '../../../shared/interfaces/cart-item';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
  standalone: false,
})
export class AddToCartComponent implements OnInit {
  addToCartForm: FormGroup;
  cartItems: CartItem[] = [];
  errorMessage: string = '';
  successMessage: string = '';
  // bookIds: string[] = [];
  @Input() bookId!:string;

  constructor(private fb: FormBuilder, private orderService: OrderService) {
    this.addToCartForm = this.fb.group({
      // bookId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.loadBookIds();
    this.loadCartItems();
  }

  get bookIdControl() {
    return this.bookId;
    // return this.addToCartForm.get('bookId');
  }

  get quantityControl() {
    return this.addToCartForm.get('quantity');
  }

  loadBookIds(): void {
    // this.orderService.getAvailableBookIds().subscribe({
    //   next: (ids) => {
    //     // this.bookIds = ids;
    //     this.errorMessage = '';
    //   },
    //   error: (error) => {
    //     this.errorMessage = 'Error loading Book IDs.';
    //     console.error('Error loading Book IDs:', error);
    //   },
    // });
  }

  loadCartItems(): void {
    this.orderService.getCartItems().subscribe({
      next: (items) => {
        this.cartItems = items;
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Error loading cart items.';
        console.error('Error loading cart:', error);
      },
    });
  }

  addToCart(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.addToCartForm.valid) {
      const bookId = this.bookId;
      // const bookId = this.addToCartForm.get('bookId')?.value;
      const quantity = this.addToCartForm.get('quantity')?.value;

      this.orderService.addToCart(bookId, quantity).subscribe({
        next: (items) => {
          this.cartItems = items;
          this.successMessage = `Added ${quantity} of book ID ${bookId} to cart.`;
          this.addToCartForm.reset({ quantity: 1 });
        },
        error: (error) => {
          this.errorMessage = 'Failed to add book to cart.';
          if (error?.error?.message) {
            this.errorMessage += ' ' + error.error.message;
          }
          console.error('Error adding to cart:', error);
        },
      });
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}