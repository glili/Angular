import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Succursale } from '../succursale';
import { SuccursaleService } from '../succursale.service';

@Component({
  selector: 'app-details-succursale',
  templateUrl: './details-succursale.component.html',
  styleUrls: ['./details-succursale.component.css']
})
export class DetailsSuccursaleComponent implements OnInit{
  //product: Product | undefined;
  @Input() succursale?: Succursale;

  constructor(
    private route: ActivatedRoute,
    private succursaleService: SuccursaleService,
    private location: Location
  ) {}
  

  
  ngOnInit(): void {
    this.getSuccursale();
  }
  
  getSuccursale(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.succursaleService.getSuccursale(id)
      .subscribe(succursale => this.succursale = succursale);
  }

  
  goBack(): void {
  this.location.back();
}

}
