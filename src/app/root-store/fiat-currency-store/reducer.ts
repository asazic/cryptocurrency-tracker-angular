import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function fiatCurrencyReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.CHANGE_FIAT: {
            return {
                ...state,
                fiat: action.payload.fiat
            };
        }
        default: {
            return state;
        }
    }
}
