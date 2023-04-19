import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent  implements OnInit{
  //product: Product | undefined;
  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}
  

  
  ngOnInit(): void {
    this.getProduct();
  }
  
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  
  goBack(): void {
  this.location.back();
}
}
