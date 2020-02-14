import { TestBed } from '@angular/core/testing';
import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  let component: ShoppingCartService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartService]
    });
  });
  beforeEach(() => {
    component = TestBed.get(ShoppingCartService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});