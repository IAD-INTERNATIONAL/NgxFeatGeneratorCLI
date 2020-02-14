import { TestBed } from '@angular/core/testing';
import { ShoppingCartItemComponent } from './shopping-cart-item.component';

describe('ShoppingCartItemComponent', () => {
  let component: ShoppingCartItemComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartItemComponent]
    });
  });
  beforeEach(() => {
    component = TestBed.get(ShoppingCartItemComponent);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});