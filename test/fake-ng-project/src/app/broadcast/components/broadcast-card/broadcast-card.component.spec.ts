import { TestBed } from '@angular/core/testing';
import { BroadcastCardComponent } from './broadcast-card.component';

describe('BroadcastCardComponent', () => {
  let component: BroadcastCardComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastCardComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastCardComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});