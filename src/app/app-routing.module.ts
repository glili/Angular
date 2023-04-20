import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { HomeComponent } from './home/home.component';
import { ListeSuccursaleComponent } from './liste-succursale/liste-succursale.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { DetailsSuccursaleComponent } from './details-succursale/details-succursale.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ListeProduitsComponent},
  {path: 'succursales', component: ListeSuccursaleComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'detailProd/:id', component: DetailsProduitComponent},
  {path: 'detailSuccursale/:id', component: DetailsSuccursaleComponent},
  {path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
