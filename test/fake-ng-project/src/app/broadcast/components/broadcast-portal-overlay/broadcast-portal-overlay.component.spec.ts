import { TestBed } from '@angular/core/testing';
import { BroadcastPortalOverlayComponent } from './broadcast-portal-overlay.component';

describe('BroadcastPortalOverlayComponent', () => {
  let component: BroadcastPortalOverlayComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastPortalOverlayComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastPortalOverlayComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});