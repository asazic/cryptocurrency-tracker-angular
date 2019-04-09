import { cryptocurrencyListAdapter, initialState, State } from './state';
import { ActionTypes, Actions } from './actions';

export function cryptocurrencyListReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.LOAD_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }
        case ActionTypes.LOAD_SUCCESS: {
            return cryptocurrencyListAdapter.addAll(action.payload.cryptocurrencies, {
                ...state,
                isLoading: false,
                error: null
            });
        }
        case ActionTypes.LOAD_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}
