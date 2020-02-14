import { TestBed } from '@angular/core/testing';
import { BroadcastHistoryOverlayComponent } from './broadcast-history-overlay.component';

describe('BroadcastHistoryOverlayComponent', () => {
  let component: BroadcastHistoryOverlayComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastHistoryOverlayComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastHistoryOverlayComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});