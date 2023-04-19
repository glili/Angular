import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ListeSuccursaleComponent } from './liste-succursale/liste-succursale.component';
import { DetailsSuccursaleComponent } from './details-succursale/details-succursale.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListeProduitsComponent,
    DetailsProduitComponent,
    ListeSuccursaleComponent,
    DetailsSuccursaleComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
