import { Action } from '@ngrx/store';
import Cryptocurrency from 'src/app/models/cryptocurrency.model';

export enum ActionTypes {
    LOAD_REQUEST = '[Cryptocurrency Details] Load Request',
    LOAD_FAILURE = '[Cryptocurrency Details] Load Failure',
    LOAD_SUCCESS = '[Cryptocurrency Details] Load Success'
}

export class LoadRequestAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
    constructor(public payload: { id: number, fiat: string }) { }
}

export class LoadFailureAction implements Action {
    readonly type = ActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;
    constructor(public payload: { cryptocurrency: Cryptocurrency}) { }
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
