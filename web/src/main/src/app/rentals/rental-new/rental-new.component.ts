import {Component, OnInit} from '@angular/core';
import {RentalService} from "../shared/rental.service";
import {Location} from "@angular/common"

@Component({
  selector: 'app-rental-new',
  templateUrl: './rental-new.component.html',
  styleUrls: ['./rental-new.component.css']
})

export class RentalNewComponent implements OnInit {

  constructor(private rentalService: RentalService,
              private location: Location) {
  }

  ngOnInit() {
  }

  save(filmId, customerId) {
    console.log("save button pressed");

    this.rentalService.save(filmId, customerId)
      .subscribe(_ => {
          console.debug("rental saved");
          this.location.back();
        },
        err => console.error("error saving rental", err));
  }

  cancel() {
    console.log("cancel add rental button pressed")
    this.location.back();
  }

}
