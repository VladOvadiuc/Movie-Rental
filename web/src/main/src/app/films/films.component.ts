import {Component} from "@angular/core";
import {Router} from "@angular/router"

@Component({
  moduleId: module.id,
  selector: 'all-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent {

  constructor(private router: Router) {

  }

  addFilm() {
    console.log("addFilm button pressed");
    this.router.navigate(["/film-new"]);
  }


}
