import { TestBed } from '@angular/core/testing';
import { BroadcastService } from './broadcast.service';

describe('BroadcastService', () => {
  let component: BroadcastService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastService]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});