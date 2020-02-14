import { TestBed } from '@angular/core/testing';
import { BroadcastPackOverlayComponent } from './broadcast-pack-overlay.component';

describe('BroadcastPackOverlayComponent', () => {
  let component: BroadcastPackOverlayComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastPackOverlayComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastPackOverlayComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});