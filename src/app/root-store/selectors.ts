import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
    CryptocurrencyListStoreSelectors
} from './cryptocurrency-list-store';

import {
    CryptocurrencyDetailsStoreSelectors
} from './cryptocurrency-details-store';
import { FiatCurrencyStoreSelectors } from './fiat-currency-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    CryptocurrencyListStoreSelectors.selectCryptocurrencyListError,
    CryptocurrencyDetailsStoreSelectors.selectCryptocurrencyDetailsError,
    (listError: string, detailsError: string) => {
        return listError || detailsError;
    }
);

export const selectIsLoading: MemoizedSelector<
    object,
    boolean
    > = createSelector(
        CryptocurrencyListStoreSelectors.selectCryptocurrencyListIsLoading,
        CryptocurrencyDetailsStoreSelectors.selectCryptocurrencyDetailsIsLoading,
        (list: boolean, details: boolean) => {
            return list || details;
        }
    );

export const currentFiat: MemoizedSelector<
    object,
    string
    > = createSelector(
        FiatCurrencyStoreSelectors.selectFiat,
        (fiat: string) => fiat
    );
