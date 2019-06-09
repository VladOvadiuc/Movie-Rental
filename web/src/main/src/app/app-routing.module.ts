import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FilmsComponent} from "./films/films.component";
import {FilmNewComponent} from "./films/film-new/film-new.component";
import {FilmDetailComponent} from "./films/film-detail/film-detail.component";

import {CustomersComponent} from "./customers/customers.component";
import {CustomerNewComponent} from "./customers/customer-new/customer-new.component";
import {CustomerDetailComponent} from "./customers/customer-detail/customer-detail.component";

import {RentalsComponent} from "./rentals/rentals.component";
import {RentalNewComponent} from "./rentals/rental-new/rental-new.component";
import {RentalDetailComponent} from "./rentals/rental-detail/rental-detail.component";

const routes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'customer-new', component: CustomerNewComponent},
  {path: 'customer/detail/:id', component: CustomerDetailComponent},

  {path: 'films', component: FilmsComponent},
  {path: 'film-new', component: FilmNewComponent},
  {path: 'film/detail/:id', component: FilmDetailComponent},

  {path: 'rentals', component: RentalsComponent},
  {path: 'rental-new', component: RentalNewComponent},
  {path: 'rental/detail/:id', component: RentalDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
