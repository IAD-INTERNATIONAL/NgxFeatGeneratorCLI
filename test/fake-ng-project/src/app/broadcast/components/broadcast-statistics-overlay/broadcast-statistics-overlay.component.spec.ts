import { TestBed } from '@angular/core/testing';
import { BroadcastStatisticsOverlayComponent } from './broadcast-statistics-overlay.component';

describe('BroadcastStatisticsOverlayComponent', () => {
  let component: BroadcastStatisticsOverlayComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastStatisticsOverlayComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastStatisticsOverlayComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});