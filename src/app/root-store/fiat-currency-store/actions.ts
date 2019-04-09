import { Action } from '@ngrx/store';

export enum ActionTypes {
    CHANGE_FIAT = '[Fiat Currency] Change Fiat'
}


export class ChangeFiatAction implements Action {
    readonly type = ActionTypes.CHANGE_FIAT;
    constructor(public payload: { fiat: string }) { }
}

export type Actions = ChangeFiatAction;
