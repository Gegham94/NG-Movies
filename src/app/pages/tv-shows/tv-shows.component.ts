import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Tv } from '../../models/tv';
import { TvShowsService } from './../../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tvShows: Tv[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;
  totalPages: number = 0;

  constructor(private tvShowsService: TvShowsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getTvShowsByGenre(genreId, 1);
      } else {
        this.getPagedTvShows(1);
      }
    });
  }

  getPagedTvShows(page: number, searchKeyword?: string) {
    this.tvShowsService.searchTvShows(page, searchKeyword).subscribe((tvShows) => {
      this.tvShows = tvShows.results;
      this.totalPages = tvShows.total_pages;
    });
  }

  getTvShowsByGenre(genreId: string, page: number) {
    this.tvShowsService.getTvShowByGenre(genreId, page).subscribe((tvShows) => {
      this.tvShows = tvShows;
    });
  }

  searchTv() {
    if (this.searchValue) {
      this.getPagedTvShows(1, this.searchValue);
    }
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getTvShowsByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedTvShows(pageNumber, this.searchValue);
      } else {
        this.getPagedTvShows(pageNumber);
      }
    }
  }
}
