import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../shared/customer.service";
import {Location} from "@angular/common"

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})

export class CustomerNewComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private location: Location) {
  }

  ngOnInit() {
  }

  save(name) {
    console.log("save button pressed");
    this.customerService.save(name).subscribe(_ => {
          console.debug("customer saved");
          this.location.back();
        },
        err => console.error("error saving customer", err));
  }

  cancel() {
    console.log("cancel add customer button pressed")
    this.location.back();
  }

}
