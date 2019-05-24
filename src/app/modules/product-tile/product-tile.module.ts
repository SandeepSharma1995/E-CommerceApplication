import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { MatCardModule } from '../../../../node_modules/@angular/material';

@NgModule({
  declarations: [ProductTileComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[ProductTileComponent]
})
export class ProductTileModule { }
