import { Actions } from '@ngrx/effects';
import { empty, Observable } from 'rxjs';
import CryptocurrenciesServiceMock from 'src/app/testing/mock-service/cryptocurrencies-service.mock';
import { TestBed } from '@angular/core/testing';
import CryptocurrenciesService from 'src/app/services/cryptocurrency.service';
import { hot, cold } from 'jasmine-marbles';
import { dummyCurrency1, dummyCurrency2 } from 'src/app/testing/data/dummy-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CryptocurrencyListEffects } from './effects';
import { LoadRequestAction, LoadSuccessAction } from './actions';

export class TestActions extends Actions {
    constructor() {
        super(empty());
    }

    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}

describe('CryptocurrencyListEffects', () => {
    let actions: TestActions;
    let effects: CryptocurrencyListEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CryptocurrencyListEffects,
                {
                    provide: Actions,
                    useFactory: getActions
                },
                {
                    provide: CryptocurrenciesService,
                    useClass: CryptocurrenciesServiceMock
                }
            ]
        });

        actions = TestBed.get(Actions);
        effects = TestBed.get(CryptocurrencyListEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('loadCryptocurrencies$', () => {

        it('should return an LoadSuccess action, with cryptocurrencies, on success', () => {
            const action = new LoadRequestAction({ fiat: 'USD' });
            const outcome = new LoadSuccessAction({ cryptocurrencies: [dummyCurrency1, dummyCurrency2] });

            actions.stream = hot('--a-', { a: action });
            const expected = cold('--b', { b: outcome });

            expect(effects.loadCryptocurrencies$).toBeObservable(expected);
        });

    });
});
