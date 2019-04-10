import { Actions } from '@ngrx/effects';
import { empty, Observable } from 'rxjs';
import { CryptocurrencyDetailsEffects } from './effects';
import CryptocurrenciesServiceMock from 'src/app/testing/mock-service/cryptocurrencies-service.mock';
import { TestBed } from '@angular/core/testing';
import CryptocurrenciesService from 'src/app/services/cryptocurrency.service';
import { LoadRequestAction, LoadSuccessAction, LoadFailureAction } from './actions';
import { hot, cold } from 'jasmine-marbles';
import { dummyCurrency1 } from 'src/app/testing/data/dummy-data';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

describe('CryptocurrencyDetailsEffects', () => {
    let actions: TestActions;
    let effects: CryptocurrencyDetailsEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CryptocurrencyDetailsEffects,
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
        effects = TestBed.get(CryptocurrencyDetailsEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('loadCryptocurrency', () => {
        it('should return an LoadSuccess action, with the Cryptocurrency, on success', () => {
        const action = new LoadRequestAction({ id: 1, fiat: 'USD' });
        const outcome = new LoadSuccessAction({ cryptocurrency: dummyCurrency1 })
    
        actions.stream = hot('--a-', { a: action });
        const expected = cold('--b', { b: outcome });
    
        expect(effects.loadCryptocurrency$).toBeObservable(expected);
      });

    });
});