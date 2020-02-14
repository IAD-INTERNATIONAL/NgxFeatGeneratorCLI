import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
