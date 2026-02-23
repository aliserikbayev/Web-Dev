import { Component, inject } from '@angular/core';
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

  service = inject(ProductService);
  route = inject(ActivatedRoute);

  products: Product[] = [];

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');

    if (idParam) {
      const id = Number(idParam);
      this.products = this.service.getProductsByCategory(id);
    } else {
      this.products = this.service.getProducts(); // показать все товары
    }
  });
}

  onDelete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
