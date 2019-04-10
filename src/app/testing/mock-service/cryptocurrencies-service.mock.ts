import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Cryptocurrency from 'src/app/models/cryptocurrency.model';
import { dummyCurrency1, dummyCurrency2 } from '../data/dummy-data';

@Injectable()
export default class CryptocurrenciesServiceMock {

    constructor() { }

    public getByFiat(fiat: string): Observable<Cryptocurrency[]> {
        return of([dummyCurrency1, dummyCurrency2]);
    }

    public getDetailsByFiatAndBitcoin(id: number, fiat: string): Observable<Cryptocurrency> {
        return of(dummyCurrency1);
    }

}
