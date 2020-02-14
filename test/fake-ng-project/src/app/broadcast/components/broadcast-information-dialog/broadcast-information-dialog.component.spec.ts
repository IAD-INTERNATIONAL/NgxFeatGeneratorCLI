import { TestBed } from '@angular/core/testing';
import { BroadcastInformationDialogComponent } from './broadcast-information-dialog.component';

describe('BroadcastInformationDialogComponent', () => {
  let component: BroadcastInformationDialogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastInformationDialogComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastInformationDialogComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});