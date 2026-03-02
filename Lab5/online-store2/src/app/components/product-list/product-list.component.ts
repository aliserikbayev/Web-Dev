import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() title: string = 'Products';

  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() likeProduct = new EventEmitter<number>();
  @Output() deleteProduct = new EventEmitter<number>();

  onToggleFavorite(productId: number): void {
    this.toggleFavorite.emit(productId);
  }

  onLike(productId: number): void {
    this.likeProduct.emit(productId);
  }

  onDelete(productId: number): void {
    this.deleteProduct.emit(productId);
  }
}
