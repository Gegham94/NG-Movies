import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Tv, TvCredits, TvImages, TvVideo } from '../../models/tv';
import { TvShowsService } from '../../services/tv-shows.service';
import { IMAGES_SIZES } from '../../constants/images-size';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  imagesSizes = IMAGES_SIZES;
  tvShow: Tv | null = null;
  tvShowVideos: TvVideo[] = [];
  tvShowImages: TvImages | null = null;
  tvShowCredits: TvCredits | null = null;

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getTvShow(id);
      this.getTvShowVideos(id);
      this.getTvShowImages(id);
      this.getTvShowCredits(id);
    });
  }

  ngOnDestroy() {
    console.log('Message: Component Destroyed');
  }

  getTvShow(id: string) {
    this.tvShowsService.getTvShow(id).subscribe((tvShow) => {
      this.tvShow = tvShow;
    });
  }

  getTvShowVideos(id: string) {
    this.tvShowsService.getTvShowVideos(id).subscribe((tvShowVideoData) => {
      this.tvShowVideos = tvShowVideoData;
    });
  }

  getTvShowImages(id: string) {
    this.tvShowsService.getTvShowImages(id).subscribe((tvShowImagesData) => {
      this.tvShowImages = tvShowImagesData;
    });
  }

  getTvShowCredits(id: string) {
    this.tvShowsService.getTvShowCredits(id).subscribe((tvShowCreditsData) => {
      this.tvShowCredits = tvShowCreditsData;
    });
  }
}
