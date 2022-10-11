import { Component, OnInit } from '@angular/core';
import { Tv } from '../../models/tv';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { TvShowsService } from '../../services/tv-shows.service';
import { Person } from '../../models/person';
import { PersonesService } from '../../services/persones.service';

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

  popularPersones: Person[] = [];

  constructor(
    private moviesService: MoviesService, 
    private tvShowsService: TvShowsService,
    private personesService: PersonesService
    ) {}

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
    this.tvShowsService.getTvShows('popular').subscribe((tvShows) => {
      this.popularTvShows = tvShows;
    });
    this.tvShowsService.getTvShows('top_rated').subscribe((tvShows) => {
      this.topRatedTvShows = tvShows;
    });
    this.personesService.getPersones('popular').subscribe((persones) => {
      this.popularPersones = persones;
    });
  }
}
