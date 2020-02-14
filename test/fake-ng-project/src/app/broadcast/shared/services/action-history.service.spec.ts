import { TestBed } from '@angular/core/testing';
import { ActionHistoryService } from './action-history.service';

describe('ActionHistoryService', () => {
  let component: ActionHistoryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionHistoryService]
    });
  });
  beforeEach(() => {
    component = TestBed.get(ActionHistoryService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});