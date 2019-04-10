import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FiatSelectionComponent } from './fiat-selection/fiat-selection.component';
import { CryptocurrenciesListComponent } from './cryptocurrencies-list/cryptocurrencies-list.component';
import { CryptocurrencyDetailsComponent } from './cryptocurrency-details/cryptocurrency-details.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from '../routing/app-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { CryptocurrencyDetailsFacade } from '../facade/cryptocurrency-details.facade';
import { CryptocurrencyListFacade } from '../facade/cryptocurrency-list.facade';


@NgModule({
    exports: [
        FiatSelectionComponent,
        CryptocurrenciesListComponent,
        CryptocurrencyDetailsComponent,
        ToolbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
    ],
    providers: [CryptocurrencyDetailsFacade, CryptocurrencyListFacade],
    declarations: [
        FiatSelectionComponent,
        CryptocurrenciesListComponent,
        CryptocurrencyDetailsComponent,
        ToolbarComponent
    ]
})
export class ComponentsModule { }
