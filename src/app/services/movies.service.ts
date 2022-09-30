import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Movie, MovieDto } from './../models/movie';
import { TvDto } from '../models/tv';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_URL = environment.API_URL;
  API_KEY = environment.API_KEY

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(`${this.API_URL}/movie/${type}?api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results.slice(0, count));
    }));
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.API_URL}/movie/${id}?api_key=${this.API_KEY}`);
  }

  searchMovies(page: number) {
    return this.http.get<MovieDto>(`${this.API_URL}/movie/popular?page=${page}&api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results);
    }));
  }

  getTvs(type: string = 'latest', count: number = 12) {
    return this.http.get<TvDto>(`${this.API_URL}/tv/${type}?api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results.slice(0, count));
    }));
  }
}
