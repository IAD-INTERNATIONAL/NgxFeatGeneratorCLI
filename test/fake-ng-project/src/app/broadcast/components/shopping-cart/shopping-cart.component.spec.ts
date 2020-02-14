import { TestBed } from '@angular/core/testing';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(ShoppingCartComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});