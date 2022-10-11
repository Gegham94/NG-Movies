import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenresComponent } from './pages/genres/genres.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { PersonesComponent } from './pages/persones/persones.component';
import { PersonComponent } from './pages/person/person.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/genres/:genreId', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv', component: TvShowsComponent },
  { path: 'tv/genres/:genreId', component: TvShowsComponent },
  { path: 'tv/:id', component: TvShowComponent },
  { path: 'person', component: PersonesComponent },
  { path: 'person/:id', component: PersonComponent },
  { path: 'genres', component: GenresComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
