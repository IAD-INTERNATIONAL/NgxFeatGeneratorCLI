import { TestBed } from '@angular/core/testing';
import { BroadcastHistoryService } from './broadcast-history.service';

describe('BroadcastHistoryService', () => {
  let component: BroadcastHistoryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastHistoryService]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastHistoryService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});