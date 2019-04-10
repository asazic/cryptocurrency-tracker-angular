import { CryptocurrencyListStoreState } from './cryptocurrency-list-store';
import { CryptocurrencyDetailsStoreState } from './cryptocurrency-details-store';
import { FiatCurrencyStoreState } from './fiat-currency-store';

export interface State {
    cryptocurrencyList: CryptocurrencyListStoreState.State;
    cryptocurrencyDetails: CryptocurrencyDetailsStoreState.State;
    fiat: FiatCurrencyStoreState.State;
}

export const initialState: State = {
    cryptocurrencyList: CryptocurrencyListStoreState.initialState,
    cryptocurrencyDetails: CryptocurrencyDetailsStoreState.initialState,
    fiat: FiatCurrencyStoreState.initialState
}
