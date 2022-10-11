import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Person, PersonImages, PersonMovieCredits } from '../../models/person';
import { PersonesService } from '../../services/persones.service';
import { IMAGES_SIZES } from '../../constants/images-size';

@Component({
  selector: 'app-people',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  imagesSizes = IMAGES_SIZES;
  person: Person | null = null;
  personImages: PersonImages | null = null;
  personCredits: PersonMovieCredits | null = null;

  constructor(private route: ActivatedRoute, private personesService: PersonesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getPerson(id);
      this.getPersonImages(id);
      this.getPersonMovieCredits(id);
    });
  }

  ngOnDestroy() {}

  getPerson(id: string) {
    this.personesService.getPerson(id).subscribe((person) => {
      this.person = person;
    });
  }

  getPersonImages(id: string) {
    this.personesService.getPersonImages(id).subscribe((personImagesData) => {
      this.personImages = personImagesData;
    });
  }

  getPersonMovieCredits(id: string) {
    this.personesService.getPersonMovieCredits(id).subscribe((personMovieCreditsData) => {
      this.personCredits = personMovieCreditsData;
      console.log(this.personCredits)

    });
  }
}
