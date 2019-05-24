import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, OrderConfirmedComponent } from './components/home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 //Material Imports
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { ProductTileModule } from '../../modules/product-tile/product-tile.module';
@NgModule({
  declarations: [HomeComponent,OrderConfirmedComponent],
  entryComponents:[OrderConfirmedComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ProductTileModule,
    //Material Imports
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class DashboardModule { }
