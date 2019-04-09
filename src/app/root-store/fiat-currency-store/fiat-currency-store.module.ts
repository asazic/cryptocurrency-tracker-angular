import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { fiatCurrencyReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('fiat', fiatCurrencyReducer)
  ]
})
export class FiatCurrencyStoreModule { }
