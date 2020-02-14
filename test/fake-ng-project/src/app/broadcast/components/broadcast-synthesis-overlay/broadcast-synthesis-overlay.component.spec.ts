import { TestBed } from '@angular/core/testing';
import { BroadcastSynthesisOverlayComponent } from './broadcast-synthesis-overlay.component';

describe('BroadcastSynthesisOverlayComponent', () => {
  let component: BroadcastSynthesisOverlayComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastSynthesisOverlayComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastSynthesisOverlayComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});