import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(`${this.API_URL}/3/movie/upcoming?api_key=1aac20d13b0ca6137b435dfd09fe830f`);
  }
}
