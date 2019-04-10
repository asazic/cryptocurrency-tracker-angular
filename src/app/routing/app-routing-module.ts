import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptocurrenciesListComponent } from '../components/cryptocurrencies-list/cryptocurrencies-list.component';
import { CryptocurrencyDetailsComponent } from '../components/cryptocurrency-details/cryptocurrency-details.component';
import { FiatSelectionComponent } from '../components/fiat-selection/fiat-selection.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/cryptocurrency-list'
    },
    {
        path: 'cryptocurrency-list',
        component: CryptocurrenciesListComponent
    },
    {
        path: 'cryptocurrency-details/:id',
        component: CryptocurrencyDetailsComponent,
    },
    {
        path: 'fiat-selection',
        component: FiatSelectionComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
