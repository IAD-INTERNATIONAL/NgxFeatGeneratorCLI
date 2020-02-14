import { TestBed } from '@angular/core/testing';
import { BroadcastPackComponent } from './broadcast-pack.component';

describe('BroadcastPackComponent', () => {
  let component: BroadcastPackComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastPackComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastPackComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});