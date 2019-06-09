import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {CustomerService} from "../shared/customer.service";
import {Customer} from "../shared/customer.model";


@Component({
  moduleId: module.id,
  selector: 'all-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  errorMessage: string;
  customers: Array<Customer>;
  selectedCustomer: Customer;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers()
      .subscribe(
        customers => this.customers = customers,
        error => this.errorMessage = <any>error
      );
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  gotoDetail(): void {
    this.router.navigate(['/customer/detail', this.selectedCustomer.id]);
  }

  delete(customer): void {
    this.customerService.delete(customer).subscribe(data => {
      this.customers = this.customers.filter(c => c !== customer);
    })
  }

}
