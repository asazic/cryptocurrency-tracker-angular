import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as listActions from './actions';
import CryptocurrenciesService from 'src/app/services/cryptocurrency.service';

@Injectable()
export class CryptocurrencyListEffects {
    constructor(private dataService: CryptocurrenciesService, private actions$: Actions) { }

    @Effect()
    loadCryptocurrencies$: Observable<Action> = this.actions$.pipe(
        ofType<listActions.LoadRequestAction>(
            listActions.ActionTypes.LOAD_REQUEST
        ),
        switchMap((action) => {
            return this.dataService
                .getListByFiat(action.payload.fiat)
                .pipe(
                    map(
                        (response) =>
                            new listActions.LoadSuccessAction({
                                cryptocurrencies: response.data
                            })
                    ),
                    catchError(error =>
                        observableOf(new listActions.LoadFailureAction({ error }))
                    )
                );
            }
        )
    );
}
