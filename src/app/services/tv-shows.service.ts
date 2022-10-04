import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Tv, TvCredits, TvDto, TvImages, TvVideoDto } from '../models/tv';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  API_URL = environment.API_URL;
  API_KEY = environment.API_KEY;

  constructor(private http: HttpClient) {}

  getTvShows(type: string = 'popular') {
    return this.http.get<TvDto>(`${this.API_URL}/tv/${type}?api_key=${this.API_KEY}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getTvShow(id: string) {
    return this.http.get<Tv>(`${this.API_URL}/tv/${id}?api_key=${this.API_KEY}`);
  }

  getTvShowVideos(id: string) {
    return this.http.get<TvVideoDto>(`${this.API_URL}/tv/${id}/videos?api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results);
    }));
  }

  getTvShowsGenres() {
    return this.http.get<GenresDto>(`${this.API_URL}/genre/tv/list?api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.genres);
    }));
  }

  getTvShowByGenre(genreId: string, pageNumber: number) {
    return this.http.get<TvDto>(`${this.API_URL}/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results);
    }));
  }

  getTvShowImages(id: string) {
    return this.http.get<TvImages>(`${this.API_URL}/tv/${id}/images?api_key=${this.API_KEY}`);
  }

  getTvShowCredits(id: string) {
    return this.http.get<TvCredits>(`${this.API_URL}/tv/${id}/credits?api_key=${this.API_KEY}`);
  }

  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular'
    return this.http.get<TvDto>(`${this.API_URL}${uri}?page=${page}&query=${searchValue}&api_key=${this.API_KEY}`)
    .pipe(switchMap(res => {
      return of (res.results);
    }));
  }
}
