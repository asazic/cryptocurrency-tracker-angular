import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Cryptocurrency from 'src/app/models/cryptocurrency.model';
import { dummyCurrency1, dummyCurrency2 } from '../data/dummy-data';

@Injectable()
export default class CryptocurrenciesServiceMock {
    constructor(private _http: HttpClient) { }

    public getByFiat(fiat: string): Observable<Cryptocurrency[]> {
        return of([dummyCurrency1, dummyCurrency2]);
    }

    public getDetailsByFiatAndBitcoin(id: number, fiat: string): Observable<Cryptocurrency> {
        return of(dummyCurrency1);
    }
}
