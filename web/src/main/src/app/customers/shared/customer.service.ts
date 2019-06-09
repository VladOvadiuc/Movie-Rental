import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Customer} from "./customer.model";

import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Rental} from "../../rentals/shared/rental.model";


@Injectable()
export class CustomerService {
  private customersUrl = 'http://localhost:8008/customers';

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
      .get<Array<Customer>>(this.customersUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.getCustomers()
      .map(customers => customers.find(customer => customer.id === id));
  }

  update(customer): Observable<Customer> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.httpClient
      .put<Customer>(url, customer);
  }

  save(name: string): Observable<Customer> {
    let customer = {name};
    return this.httpClient
      .post<Customer>(this.customersUrl, customer);
  }

  delete(customer): Observable<Customer> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.httpClient.delete<Customer>(url);
  }

}
