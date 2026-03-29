import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  stars = [1,2,3,4,5];
  product = input.required<Product>();
  delete = output<number>();
  favoriteToggled = output<number>();
  likes = signal(0);

  ngOnInit() {
    this.likes.set(this.product().likes);
  }

  onLike() { this.likes.update(v => v + 1); }
  onDelete() { this.delete.emit(this.product().id); }
  onToggleFavorite() { this.favoriteToggled.emit(this.product().id); }

  shareWhatsApp() { window.open(`https://wa.me/?text=${this.product().link}`, '_blank'); }
  shareTelegram() { window.open(`https://t.me/share/url?url=${this.product().link}`, '_blank'); }
}
