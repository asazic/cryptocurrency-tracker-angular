import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CryptocurrencyListStoreModule } from './cryptocurrency-list-store';
import { CryptocurrencyDetailsStoreModule } from './cryptocurrency-details-store';
import { FiatCurrencyStoreModule } from './fiat-currency-store';
import CryptocurrenciesService from '../services/cryptocurrency.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
        CommonModule,
        CryptocurrencyListStoreModule,
        CryptocurrencyDetailsStoreModule,
        FiatCurrencyStoreModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
    ],
    providers: [CryptocurrenciesService]
})
export class RootStoreModule { }
