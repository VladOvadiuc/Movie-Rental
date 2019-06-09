import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {RentalService} from "../shared/rental.service";
import {Rental} from "../shared/rental.model";


@Component({
  moduleId: module.id,
  selector: 'all-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
})
export class RentalListComponent implements OnInit {
  errorMessage: string;
  rentals: Array<Rental>;
  selectedRental: Rental;

  constructor(private rentalService: RentalService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.rentalService.getRentals()
      .subscribe(
        rentals => this.rentals = rentals,
        error => this.errorMessage = <any>error
      );
  }

  onSelect(rental: Rental): void {
    this.selectedRental = rental;
  }

  gotoDetail(): void {
    this.router.navigate(['/rental/detail', this.selectedRental.id]);
  }
  delete(rental): void {
    this.rentalService.delete(rental).subscribe( data => {
      this.rentals = this.rentals.filter(r => r !== rental);
    })
  }

}
