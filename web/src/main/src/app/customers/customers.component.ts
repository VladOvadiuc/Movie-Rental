import {Component} from "@angular/core";
import {Router} from "@angular/router"

@Component({
  moduleId: module.id,
  selector: 'all-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {

  constructor(private router: Router) {

  }

  addCustomer() {
    console.log("addCustomer button pressed");
    this.router.navigate(["/customer-new"]);
  }


}
