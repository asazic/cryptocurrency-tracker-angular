import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { State } from './state';


const getFiat = (state: State): string => state.fiat;

export const selectFiatState: MemoizedSelector<
    object,
    State
    > = createFeatureSelector<State>('fiat');

export const selectFiat: MemoizedSelector<
    object,
    string
    > = createSelector(selectFiatState, getFiat);
