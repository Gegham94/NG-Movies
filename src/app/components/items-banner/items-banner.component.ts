import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Tv } from '../../models/tv';
import { Person } from './../../models/person';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {
  @Input() movieItems: Movie[] = [];
  @Input() tvShowItems: Tv[] = [];
  @Input() personItems: Person[] = [];
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {
  }
}
