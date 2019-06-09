import {Component, OnInit} from '@angular/core';
import {FilmService} from "../shared/film.service";
import {Location} from "@angular/common"

@Component({
  selector: 'app-film-new',
  templateUrl: './film-new.component.html',
  styleUrls: ['./film-new.component.css']
})

export class FilmNewComponent implements OnInit {

  constructor(private filmService: FilmService,
              private location: Location) {
  }

  ngOnInit() {
  }

  save(title, director, releaseYear) {
    console.log("save button pressed");

    this.filmService.save(title, director, releaseYear)
      .subscribe(_ => {
          console.debug("film saved");
          this.location.back();
        },
        err => console.error("error saving film", err));
  }

  cancel() {
    console.log("cancel add film button pressed")
    this.location.back();
  }

}
