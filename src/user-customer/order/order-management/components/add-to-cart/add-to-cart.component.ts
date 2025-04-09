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
  cartItems: CartItem[] = [];
  errorMessage: string = '';
  successMessage: string = '';
  @Input() bookId!: string;

  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  get bookIdControl() {
    return this.bookId;
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

    const bookId = this.bookId;
    const quantity = 1;

    this.orderService.addToCart(bookId, quantity).subscribe({
      next: (items) => {
        this.cartItems = items;
        this.successMessage = `Added ${quantity} of book ID ${bookId} to cart.`;
      },
      error: (error) => {
        this.errorMessage = 'Failed to add book to cart.';
        if (error?.error?.message) {
          this.errorMessage += ' ' + error.error.message;
        }
        console.error('Error adding to cart:', error);
      },
    });
  }
}
