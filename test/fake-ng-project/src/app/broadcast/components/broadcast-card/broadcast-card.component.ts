import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-broadcast-card',
  templateUrl: './broadcast-card.component.html',
  styleUrls: ['./broadcast-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BroadcastCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
