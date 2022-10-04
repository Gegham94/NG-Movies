import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';

import { Movie, MovieDto, MovieVideoDto, MovieImages, MovieCredits } from './../models/movie';
import { GenresDto } from '../models/genre';

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

  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(`${this.API_URL}/movie/${id}/videos?api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results);
    }));
  }

  getMoviesGenres() {
    return this.http.get<GenresDto>(`${this.API_URL}/genre/movie/list?api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.genres);
    }));
  }

  getMovieByGenre(genreId: string, pageNumber: number) {
    return this.http.get<MovieDto>(`${this.API_URL}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results);
    }));
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.API_URL}/movie/${id}/images?api_key=${this.API_KEY}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.API_URL}/movie/${id}/credits?api_key=${this.API_KEY}`);
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular'
    return this.http.get<MovieDto>(`${this.API_URL}${uri}?page=${page}&query=${searchValue}&api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results);
    }));
  }

}
