import { Component, OnInit } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';
import { Genre } from '../../models/genre';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  moviesGenres: Genre[] = [];
  tvShowsGenres: Genre[] = [];

  constructor(private moviesService: MoviesService, private tvShowsService: TvShowsService) { }

  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe((moviesGenresData) => {
      this.moviesGenres = moviesGenresData;
    });

    this.tvShowsService.getTvShowsGenres().subscribe((tvShowsGenresData) => {
      this.tvShowsGenres = tvShowsGenresData;
    });
  }

}
