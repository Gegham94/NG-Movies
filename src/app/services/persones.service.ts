import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';

import { Person, PersonDto, PersonImages, PersonMovieCredits } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonesService {
  API_URL = environment.API_URL;
  API_KEY = environment.API_KEY

  constructor(private http: HttpClient) {}

  getPersones(type: string = 'popular', count: number = 12) {
    return this.http.get<PersonDto>(`${this.API_URL}/person/${type}?api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results.slice(0, count));
    }));
  }

  getPerson(id: string) {
    return this.http.get<Person>(`${this.API_URL}/person/${id}?api_key=${this.API_KEY}`);
  }

  getPersonImages(id: string) {
    return this.http.get<PersonImages>(`${this.API_URL}/person/${id}/images?api_key=${this.API_KEY}`);
  }

  getPersonMovieCredits(id: string) {
    return this.http.get<PersonMovieCredits>(`${this.API_URL}/person/${id}/movie_credits?api_key=${this.API_KEY}`);
  }

  searchPersones(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/person' : '/person/popular'
    return this.http.get<PersonDto>(`${this.API_URL}${uri}?page=${page}&query=${searchValue}&api_key=${this.API_KEY}`)
    .pipe(res => {
      return res;
    });
  }

}
