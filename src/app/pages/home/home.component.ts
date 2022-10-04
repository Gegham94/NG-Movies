import { Component, OnInit } from '@angular/core';
import { Tv } from '../../models/tv';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];

  popularTvShows: Tv[] = [];
  topRatedTvShows: Tv[] = [];

  constructor(private moviesService: MoviesService, private tvShowService: TvShowsService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
    this.tvShowService.getTvShows('popular').subscribe((tvShows) => {
      this.popularTvShows = tvShows;
    });
    this.tvShowService.getTvShows('top_rated').subscribe((tvShows) => {
      this.topRatedTvShows = tvShows;
    });
  }
}
