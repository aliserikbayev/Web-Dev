import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() favoriteToggled = new EventEmitter<number>();

  service = inject(ProductService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    if (this.products.length === 0) {
      this.route.paramMap.subscribe(params => {
        const idParam = params.get('id');
        if (idParam) {
          this.products = this.service.getProductsByCategory(Number(idParam));
        } else {
          this.products = this.service.getProducts();
        }
      });
    }
  }

  onDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  onFavoriteToggled(productId: number) {
    // Toggle directly in service
    const product = this.service.products.find(p => p.id === productId);
    if (!product) return;
    product.isFavorite = !product.isFavorite;
    this.service.products = [...this.service.products];
    // Refresh local list
    this.products = [...this.products];
    // Also notify parent if needed
    this.favoriteToggled.emit(productId);
  }
}
