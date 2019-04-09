import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cryptocurrencyListReducer } from './reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CryptocurrencyListEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('cryptocurrency-list', cryptocurrencyListReducer),
    EffectsModule.forFeature([CryptocurrencyListEffects])
  ]
})
export class CryptocurrencyListStoreModule { }
