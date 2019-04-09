import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cryptocurrencyDetailsReducer } from './reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CryptocurrencyDetailsEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('cryptocurrency-details', cryptocurrencyDetailsReducer),
    EffectsModule.forFeature([CryptocurrencyDetailsEffects])
  ]
})
export class CryptocurrencyDetailsStoreModule { }
