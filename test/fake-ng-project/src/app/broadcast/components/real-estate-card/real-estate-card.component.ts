import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-real-estate-card',
  templateUrl: './real-estate-card.component.html',
  styleUrls: ['./real-estate-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealEstateCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
