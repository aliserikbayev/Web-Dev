import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, ProductListComponent, ProductItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  service = inject(ProductService);
  categories = this.service.getCategories();
  searchText: string = '';

  get favorites(): Product[] {
    return this.service.products.filter(p => p.isFavorite);
  }

  onFavoriteToggled(productId: number): void {
    const product = this.service.products.find(p => p.id === productId);
    if (!product) return;
    product.isFavorite = !product.isFavorite;
    this.service.products = [...this.service.products];
  }
}
