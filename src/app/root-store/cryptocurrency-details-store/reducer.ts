import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function cryptocurrencyDetailsReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.LOAD_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }
        case ActionTypes.LOAD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: null,
                cryptocurrency: action.payload.cryptocurrency
            };
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
