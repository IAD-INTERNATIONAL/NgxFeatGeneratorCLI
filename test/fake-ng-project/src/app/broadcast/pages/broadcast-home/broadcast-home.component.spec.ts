import { TestBed } from '@angular/core/testing';
import { BroadcastHomeComponent } from './broadcast-home.component';

describe('BroadcastHomeComponent', () => {
  let component: BroadcastHomeComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastHomeComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastHomeComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});