import { Injectable } from '@angular/core';
import { RootStoreState, CryptocurrencyListStoreSelectors, FiatCurrencyStoreSelectors, CryptocurrencyListStoreActions, RootStoreSelectors } from 'src/app/root-store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import Cryptocurrency from '../models/cryptocurrency.model';
import { CryptocurrencyHelper } from '../helpers/cryptocurrency-helper';


@Injectable()
export class CryptocurrencyListFacade {
    public isLoading$: Observable<boolean> = this.store.pipe(select(RootStoreSelectors.selectIsLoading));
    public pagedCryptocurrencies$: Observable<Cryptocurrency[]> = this.store.pipe(select(CryptocurrencyListStoreSelectors.selectPagedCryptocurrencies));
    public error$: Observable<string> = this.store.pipe(select(RootStoreSelectors.selectError));
    private fiat: string = 'USD';

    constructor(private store: Store<RootStoreState.State>) {
        this.store.pipe(
            select(FiatCurrencyStoreSelectors.selectFiat)
        ).subscribe((fiat: string) => {
            this.fiat = fiat;
        });
    }

    public loadCryptocurrencies() {
        this.store.dispatch(new CryptocurrencyListStoreActions.LoadRequestAction({ fiat: this.fiat }));
    }

    public getFiatProperties(item: Cryptocurrency) {
        return CryptocurrencyHelper.getFiatProperties(item, this.fiat);
    }

    public setPage(page: number) {
        this.store.dispatch(new CryptocurrencyListStoreActions.LoadPaged({ page: page }));
    }
}