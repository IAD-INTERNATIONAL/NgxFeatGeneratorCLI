import { TestBed } from '@angular/core/testing';
import { ElysiumGuardGuard } from './elysium-guard.guard';

describe('ElysiumGuardGuard', () => {
  let component: ElysiumGuardGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElysiumGuardGuard]
    });
  });
  beforeEach(() => {
    component = TestBed.get(ElysiumGuardGuard);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});