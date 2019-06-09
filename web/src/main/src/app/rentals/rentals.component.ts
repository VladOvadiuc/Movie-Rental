import {Component} from "@angular/core";
import {Router} from "@angular/router"

@Component({
  moduleId: module.id,
  selector: 'all-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css'],
})
export class RentalsComponent {

  constructor(private router: Router) {

  }

  addRental() {
    console.log("addRental button pressed");
    this.router.navigate(["/rental-new"]);
  }


}
