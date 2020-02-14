import { TestBed } from '@angular/core/testing';
import { PortalGroupService } from './portal-group.service';

describe('PortalGroupService', () => {
  let component: PortalGroupService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortalGroupService]
    });
  });
  beforeEach(() => {
    component = TestBed.get(PortalGroupService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});