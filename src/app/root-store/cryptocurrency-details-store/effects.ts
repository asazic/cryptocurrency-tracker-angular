import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf, forkJoin } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as detailsActions from './actions';
import CryptocurrenciesService from 'src/app/services/cryptocurrency.service';
import Cryptocurrency from 'src/app/models/cryptocurrency.model';

@Injectable()
export class CryptocurrencyDetailsEffects {
    constructor(private dataService: CryptocurrenciesService, private actions$: Actions) { }

    @Effect()
    loadCryptocurrency$: Observable<Action> = this.actions$.pipe(
        ofType<detailsActions.LoadRequestAction>(
            detailsActions.ActionTypes.LOAD_REQUEST
        ),
        switchMap((action) => {
            const byFiatObservable = this.dataService.getDetailsByFiat(action.payload.id, action.payload.fiat);
            const byBitcoinObservable = this.dataService.getDetailsByFiat(action.payload.id, 'BTC');
            return forkJoin(byFiatObservable, byBitcoinObservable).pipe(
                map(([first, second]) => {
                    const response = first.data[action.payload.id] as Cryptocurrency;
                    response.quote = {
                        ...(first.data[action.payload.id] as Cryptocurrency).quote,
                        ...(second.data[action.payload.id] as Cryptocurrency).quote
                    };
                    return response;
                })
            ).pipe(
                map(
                    cryptocurrency =>
                        new detailsActions.LoadSuccessAction({
                            cryptocurrency
                        })
                ),
                catchError(error =>
                    observableOf(new detailsActions.LoadFailureAction({ error }))
                )
            );
        }
        )
    );
}
