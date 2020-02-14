import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-broadcast-statistics-overlay',
  templateUrl: './broadcast-statistics-overlay.component.html',
  styleUrls: ['./broadcast-statistics-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BroadcastStatisticsOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
