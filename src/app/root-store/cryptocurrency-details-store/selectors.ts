import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { State } from './state';
import Cryptocurrency from 'src/app/models/cryptocurrency.model';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getCryptocurrencyDetails = (state: State): any => state.cryptocurrency;

export const selectCryptocurrencyDetailsState: MemoizedSelector<
    object,
    State
    > = createFeatureSelector<State>('cryptocurrency-details');

export const selectCryptocurrencyDetailsError: MemoizedSelector<object, any> = createSelector(
    selectCryptocurrencyDetailsState,
    getError
);

export const selectCryptocurrencyDetailsIsLoading: MemoizedSelector<
    object,
    boolean
    > = createSelector(selectCryptocurrencyDetailsState, getIsLoading);

export const selectCryptocurrencyDetails: MemoizedSelector<
    object,
    Cryptocurrency
    > = createSelector(selectCryptocurrencyDetailsState, getCryptocurrencyDetails);
