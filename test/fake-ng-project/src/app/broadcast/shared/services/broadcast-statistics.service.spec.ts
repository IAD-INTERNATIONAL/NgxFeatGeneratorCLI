import { TestBed } from '@angular/core/testing';
import { BroadcastStatisticsService } from './broadcast-statistics.service';

describe('BroadcastStatisticsService', () => {
  let component: BroadcastStatisticsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastStatisticsService]
    });
  });
  beforeEach(() => {
    component = TestBed.get(BroadcastStatisticsService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});