import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Person } from '../../models/person';
import { PersonesService } from './../../services/persones.service';

@Component({
  selector: 'app-persones',
  templateUrl: './persones.component.html',
  styleUrls: ['./persones.component.scss']
})
export class PersonesComponent implements OnInit {
  persones: Person[] = [];
  searchValue: string | null = null;
  totalPages: number = 0;

  constructor(private personesService: PersonesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      this.getPagedPersones(1);
    });
  }

  getPagedPersones(page: number, searchKeyword?: string) {
    this.personesService.searchPersones(page, searchKeyword).subscribe((persones) => {
      this.persones = persones.results;
      this.totalPages = persones.total_pages;
    });
  }

  searchPerson() {
    if (this.searchValue) {
      this.getPagedPersones(1, this.searchValue);
    }
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;

    if (this.searchValue) {
      this.getPagedPersones(pageNumber, this.searchValue);
    } else {
      this.getPagedPersones(pageNumber);
    }
  }
}
