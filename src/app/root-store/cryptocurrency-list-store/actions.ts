import { Action } from '@ngrx/store';
import Cryptocurrency from 'src/app/models/cryptocurrency.model';

export enum ActionTypes {
    LOAD_REQUEST = '[Cryptocurrency List] Load Request',
    LOAD_FAILURE = '[Cryptocurrency List] Load Failure',
    LOAD_SUCCESS = '[Cryptocurrency List] Load Success',
    UPDATE_PAGE = '[Cryptocurrency List] Update Page'
}

export class LoadRequestAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
    constructor(public payload: { fiat: string }) { }
}

export class LoadFailureAction implements Action {
    readonly type = ActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload: { cryptocurrencies: Cryptocurrency[]}) { }
}

export class LoadPaged implements Action {
    readonly type = ActionTypes.UPDATE_PAGE;
    constructor(public payload: { page: number }) { }
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction | LoadPaged;
