import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as detailsActions from './actions';
import CryptocurrenciesService from 'src/app/services/cryptocurrency.service';

@Injectable()
export class CryptocurrencyDetailsEffects {
    constructor(private dataService: CryptocurrenciesService, private actions$: Actions) { }

    @Effect()
    loadCryptocurrency$: Observable<Action> = this.actions$.pipe(
        ofType<detailsActions.LoadRequestAction>(
            detailsActions.ActionTypes.LOAD_REQUEST
        ),
        // startWith(new listActions.LoadRequestAction()),
        switchMap(action =>
            this.dataService
                .getDetailsByFiatAndBitcoin(action.payload.id, action.payload.fiat)
                .pipe(
                    map(
                        cryptocurrency =>
                            new detailsActions.LoadSuccessAction({
                                cryptocurrency
                            })
                    ),
                    catchError(error =>
                        observableOf(new detailsActions.LoadFailureAction({ error }))
                    )
                )
        )
    );
}
