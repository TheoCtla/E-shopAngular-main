import { Component, OnInit, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, NgFor, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from './models/product.model';
import { SortByDatePipe } from './pipes/product.pipe';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchbarService } from './services/searchbar.service';
import { SearchProductPipe } from './pipes/product.pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, ProductCardComponent, SortByDatePipe, FormsModule, HeaderComponent, MatToolbarModule, SearchProductPipe, MatButtonModule],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  }]
})
export class AppComponent implements OnInit {

  search: string = '';
  orderAsc: string = 'asc';
  orderDesc: string = 'desc';
  order: string = 'asc';

  changerOrder() {
    if (this.order === this.orderAsc) {
      this.order = this.orderDesc;
    } else {
      this.order = this.orderAsc;
    }
  }

  constructor(private productsService: ProductsService, private searchbarService: SearchbarService) { }


  products!: Product[];
  ngOnInit() {
    this.search = '';
    this.products = this.productsService.getProducts();
    this.searchbarService.searchChanged.subscribe(search => {
      this.search = search;
    });
  }

}
