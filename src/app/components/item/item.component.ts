import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Tv } from '../../models/tv';
import { IMAGES_SIZES } from '../../constants/images-size';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() movieItemData: Movie | null = null;
  @Input() tvShowItemData: Tv | null = null;

  isSpinner: boolean = true;

  imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isSpinner = false;
    }, 5000);
  }

  disableSpinner() {
    this.isSpinner = false;
  }
}
