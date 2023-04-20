import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit{
    products: Product[] = [];
    
    constructor(private productService: ProductService) { }

    ngOnInit(): void {
      this.getProducts();
    }

    getProducts(): void{
      this.productService.getProducts()
      .subscribe(products => this.products = products.slice(0,10));
    }
  
    // selectedProduct?: Product;
    // onSelect(product: Product): void {
    // this.selectedProduct = product;
}

