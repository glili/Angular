import { Component,OnInit } from '@angular/core';
import { Succursale } from '../succursale';
import { SuccursaleService } from '../succursale.service';

@Component({
  selector: 'app-liste-succursale',
  templateUrl: './liste-succursale.component.html',
  styleUrls: ['./liste-succursale.component.css']
})
export class ListeSuccursaleComponent implements OnInit{
  succursales: Succursale[] = [];
  
  constructor(private succursaleService: SuccursaleService) { }

  ngOnInit(): void {
    this.getSuccursales();
  }

  getSuccursales(): void{
    this.succursaleService.getSuccursales()
    .subscribe(succursales => this.succursales = succursales.slice(0,5));
  }

  // selectedSuccursale?: Succursale;
  // onSelect(product: Succursale): void {
  // this.selectedSuccursale = product;
}
