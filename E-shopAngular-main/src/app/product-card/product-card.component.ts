import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  NgFor,
  NgIf,
  NgStyle,
  UpperCasePipe,
  CurrencyPipe,
  DatePipe,
} from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, NgFor, NgStyle, UpperCasePipe, CurrencyPipe, DatePipe, MatButtonModule, MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() myProduct!: Product;
  constructor(private ProductsService: ProductsService) {}

  selectedSize: string = '';
  selectedPrice: number = 0;

  updateSelectedSize(size: string, price: number) {
    this.selectedSize = size;
    this.selectedPrice = price;
  }

  onAddLike() {
    this.ProductsService.onAddLike(this.myProduct);
  }
}
