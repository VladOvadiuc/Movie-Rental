import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import {CustomersComponent} from "./customers/customers.component";
import {CustomerListComponent} from "./customers/customer-list/customer-list.component";
import {CustomerService} from "./customers/shared/customer.service";
import {CustomerNewComponent} from "./customers/customer-new/customer-new.component";
import {CustomerDetailComponent} from "./customers/customer-detail/customer-detail.component";

import {FilmService} from "./films/shared/film.service";
import {FilmsComponent} from "./films/films.component";
import {FilmListComponent} from "./films/film-list/film-list.component";
import {FilmNewComponent} from "./films/film-new/film-new.component";
import {FilmDetailComponent} from "./films/film-detail/film-detail.component";

import {RentalsComponent} from "./rentals/rentals.component";
import {RentalListComponent} from "./rentals/rental-list/rental-list.component";
import {RentalService} from "./rentals/shared/rental.service";
import {RentalNewComponent} from "./rentals/rental-new/rental-new.component";
import {RentalDetailComponent} from "./rentals/rental-detail/rental-detail.component";

@NgModule({
  declarations: [
    AppComponent,

    FilmsComponent,
    FilmListComponent,
    FilmNewComponent,
    FilmDetailComponent,

    CustomersComponent,
    CustomerListComponent,
    CustomerNewComponent,
    CustomerDetailComponent,

    RentalsComponent,
    RentalListComponent,
    RentalNewComponent,
    RentalDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CustomerService, FilmService, RentalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
