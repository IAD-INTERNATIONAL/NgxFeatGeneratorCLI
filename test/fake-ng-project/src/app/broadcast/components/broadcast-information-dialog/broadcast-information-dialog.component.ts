import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-broadcast-information-dialog',
  templateUrl: './broadcast-information-dialog.component.html',
  styleUrls: ['./broadcast-information-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BroadcastInformationDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
