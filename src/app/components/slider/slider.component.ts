import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-size';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('500ms')])])
  ]
})
export class SliderComponent implements OnInit {
  readonly imagesSizes = IMAGES_SIZES;
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  currentSlideIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 3000);
    }
  }
}
