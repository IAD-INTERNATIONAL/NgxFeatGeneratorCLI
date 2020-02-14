import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-broadcast-history-overlay',
  templateUrl: './broadcast-history-overlay.component.html',
  styleUrls: ['./broadcast-history-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BroadcastHistoryOverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
