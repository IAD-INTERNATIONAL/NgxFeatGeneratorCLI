import { TestBed } from '@angular/core/testing';
import { BroadcastPortalItemComponent } from './broadcast-portal-item.component';

describe('BroadcastPortalItemComponent', () => {
  let component: BroadcastPortalItemComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastPortalItemComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastPortalItemComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});