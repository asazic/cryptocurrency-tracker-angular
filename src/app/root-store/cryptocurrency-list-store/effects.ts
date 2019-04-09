import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as listActions from './actions';
import CryptocurrenciesService from 'src/app/services/cryptocurrency.service';

@Injectable()
export class CryptocurrencyListEffects {
    constructor(private dataService: CryptocurrenciesService, private actions$: Actions) { }

    @Effect()
    loadRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<listActions.LoadRequestAction>(
            listActions.ActionTypes.LOAD_REQUEST
        ),
        // startWith(new listActions.LoadRequestAction()),
        switchMap(action =>
            this.dataService
                .getByFiat(action.payload.fiat)
                .pipe(
                    map(
                        cryptocurrencies =>
                            new listActions.LoadSuccessAction({
                                cryptocurrencies
                            })
                    ),
                    catchError(error =>
                        observableOf(new listActions.LoadFailureAction({ error }))
                    )
                )
        )
    );
}
