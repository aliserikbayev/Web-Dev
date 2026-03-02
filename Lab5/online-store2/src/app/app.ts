import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { PRODUCTS, CATEGORIES } from './data/products.data';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  categories: Category[] = CATEGORIES;
  products: Product[] = PRODUCTS.map(p => ({ ...p }));
  selectedCategoryId: number | null = null;
  favorites: Product[] = [];

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  toggleFavorite(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;
    product.isFavorite = !product.isFavorite;
    this.favorites = this.products.filter(p => p.isFavorite);
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;
    product.likes++;
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
    this.favorites = this.products.filter(p => p.isFavorite);
  }
}
