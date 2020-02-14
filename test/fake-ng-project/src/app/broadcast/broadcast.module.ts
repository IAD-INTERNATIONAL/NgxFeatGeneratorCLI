import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastRoutingModule } from './broadcast-routing.module';
import { RealEstateCardComponent } from './components/real-estate-card/real-estate-card.component';
import { BroadcastInformationDialogComponent } from './components/broadcast-information-dialog/broadcast-information-dialog.component';
import { BroadcastCardComponent } from './components/broadcast-card/broadcast-card.component';
import { BroadcastPackComponent } from './components/broadcast-pack/broadcast-pack.component';
import { BroadcastPortalItemComponent } from './components/broadcast-portal-item/broadcast-portal-item.component';
import { BroadcastHistoryOverlayComponent } from './components/broadcast-history-overlay/broadcast-history-overlay.component';
import { BroadcastPackOverlayComponent } from './components/broadcast-pack-overlay/broadcast-pack-overlay.component';
import { BroadcastPortalOverlayComponent } from './components/broadcast-portal-overlay/broadcast-portal-overlay.component';
import { BroadcastStatisticsOverlayComponent } from './components/broadcast-statistics-overlay/broadcast-statistics-overlay.component';
import { BroadcastSynthesisOverlayComponent } from './components/broadcast-synthesis-overlay/broadcast-synthesis-overlay.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { BroadcastHomeComponent } from './pages/broadcast-home/broadcast-home.component';


@NgModule({
  declarations: [RealEstateCardComponent, BroadcastInformationDialogComponent, BroadcastCardComponent, BroadcastPackComponent, BroadcastPortalItemComponent, BroadcastHistoryOverlayComponent, BroadcastPackOverlayComponent, BroadcastPortalOverlayComponent, BroadcastStatisticsOverlayComponent, BroadcastSynthesisOverlayComponent, ShoppingCartComponent, ShoppingCartItemComponent, BroadcastHomeComponent],
  imports: [
    CommonModule,
    BroadcastRoutingModule
  ],
  entryComponents: [BroadcastHistoryOverlayComponent, BroadcastPackOverlayComponent, BroadcastPortalOverlayComponent, BroadcastStatisticsOverlayComponent, BroadcastSynthesisOverlayComponent, ShoppingCartComponent, ShoppingCartItemComponent]
})
export class BroadcastModule { }
