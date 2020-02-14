import { TestBed } from '@angular/core/testing';
import { PackService } from './pack.service';

describe('PackService', () => {
  let component: PackService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackService]
    });
  });
  beforeEach(() => {
    component = TestBed.get(PackService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});