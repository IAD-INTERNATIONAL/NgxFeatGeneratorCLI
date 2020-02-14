import { TestBed } from '@angular/core/testing';
import { RealEstateCardComponent } from './real-estate-card.component';

describe('RealEstateCardComponent', () => {
  let component: RealEstateCardComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealEstateCardComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(RealEstateCardComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});