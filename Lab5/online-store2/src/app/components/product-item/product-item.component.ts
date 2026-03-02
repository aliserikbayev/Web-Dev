import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;

  @Output() toggleFavorite = new EventEmitter<number>();
  @Output() likeProduct = new EventEmitter<number>();
  @Output() deleteProduct = new EventEmitter<number>();

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.product.id);
  }

  onLike(): void {
    this.likeProduct.emit(this.product.id);
  }

  onDelete(): void {
    this.deleteProduct.emit(this.product.id);
  }

  getStars(rating: number): string[] {
    return Array(5)
      .fill('')
      .map((_, i) => (i < rating ? '★' : '☆'));
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Check out ${this.product.name} — ₸${this.product.price.toLocaleString()}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(): void {
    const text = encodeURIComponent(`Check out ${this.product.name} — ₸${this.product.price.toLocaleString()}`);
    window.open(`https://t.me/share/url?url=https://kaspi.kz&text=${text}`, '_blank');
  }
}
