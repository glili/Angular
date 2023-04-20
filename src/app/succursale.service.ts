import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Succursale } from './succursale';
import { SUCCURSALES } from './tableau-succursale';

@Injectable({
  providedIn: 'root'
})
export class SuccursaleService {

  constructor() { }

  getSuccursales(): Observable<Succursale[]> {
    const succursales = of(SUCCURSALES)
    return succursales;
  }

  getSuccursale(id: number): Observable<Succursale> {
    const succursale = SUCCURSALES.find(sc => sc.id === id)!;
    return of(succursale);
  }

}
