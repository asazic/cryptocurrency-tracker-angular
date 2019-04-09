import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';
import { cryptocurrencyListAdapter, State } from './state';
import Cryptocurrency from 'src/app/models/cryptocurrency.model';
export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectCryptocurrencyListState: MemoizedSelector<object, State> = createFeatureSelector<State>('cryptocurrency-list');

export const selectAllCryptocurrencies: (
    state: object
) => Cryptocurrency[] = cryptocurrencyListAdapter.getSelectors(selectCryptocurrencyListState).selectAll;

export const selectCryptocurrencyListError: MemoizedSelector<object, any> = createSelector(selectCryptocurrencyListState, getError);

export const selectCryptocurrencyListIsLoading: MemoizedSelector<object, boolean> = createSelector(selectCryptocurrencyListState, getIsLoading);
