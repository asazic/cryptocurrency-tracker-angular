import { Injectable } from '@angular/core';
import {
    RootStoreState,
    FiatCurrencyStoreSelectors,
    RootStoreSelectors,
    CryptocurrencyDetailsStoreSelectors,
    CryptocurrencyDetailsStoreActions
} from 'src/app/root-store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import Cryptocurrency from '../models/cryptocurrency.model';
import { CryptocurrencyHelper } from '../helpers/cryptocurrency-helper';


@Injectable()
export class CryptocurrencyDetailsFacade {
    public isLoading$: Observable<boolean> = this.store.pipe(select(RootStoreSelectors.selectIsLoading));
    public cryptocurrency$: Observable<Cryptocurrency> = this.store.pipe(select(CryptocurrencyDetailsStoreSelectors.selectCryptocurrencyDetails));
    public error$: Observable<string> = this.store.pipe(select(RootStoreSelectors.selectError));
    public fiat: string = 'USD';

    constructor(private store: Store<RootStoreState.State>) {
        this.store.pipe(
            select(FiatCurrencyStoreSelectors.selectFiat)
        ).subscribe((fiat: string) => {
            this.fiat = fiat;
        });
    }

    public loadCryptocurrency(id: number) {
        this.store.dispatch(new CryptocurrencyDetailsStoreActions.LoadRequestAction({ id: id, fiat: this.fiat }));
    }

    public getFiatProperties(item: Cryptocurrency, fiat: string = this.fiat) {
        return CryptocurrencyHelper.getFiatProperties(item, fiat);
    }
}