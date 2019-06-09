import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Rental} from "./rental.model";

import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class RentalService {
  private rentalsUrl = 'http://localhost:8008/rentals';

  constructor(private httpClient: HttpClient) {
  }

  getRentals(): Observable<Rental[]> {
    return this.httpClient
      .get<Array<Rental>>(this.rentalsUrl);
  }

  getRental(id: number): Observable<Rental> {
    return this.getRentals().map(rentals => rentals.find(rental => (rental.id == id)));
  }

  update(rental): Observable<Rental> {
    const url = `${this.rentalsUrl}/${rental.id}`;
    return this.httpClient.put<Rental>(url, rental);
  }

  save(filmId: number, customerId: number): Observable<Rental> {
    let rental = {filmId, customerId};
    return this.httpClient.post<Rental>(this.rentalsUrl, rental);
  }

  delete(rental): Observable<Rental> {
    const url = `${this.rentalsUrl}/${rental.id}`;
    return this.httpClient.delete<Rental>(url);
  }
}
