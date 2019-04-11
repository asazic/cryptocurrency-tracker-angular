import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Cryptocurrency from 'src/app/models/cryptocurrency.model';
import { dummyCurrency1, dummyCurrency2 } from '../data/dummy-data';
import { IHttpResponse } from 'src/app/services/cryptocurrency.service';

@Injectable()
export default class CryptocurrenciesServiceMock {
    constructor(private _http: HttpClient) { }

    public getListByFiat(fiat: string): Observable<IHttpResponse<Cryptocurrency[]>> {
        return of({ data: [dummyCurrency1, dummyCurrency2] } as IHttpResponse<Cryptocurrency[]>);
    }

    public getDetailsByFiat(id: number, fiat: string): Observable<IHttpResponse<Cryptocurrency>> {
        return of({ data: dummyCurrency1 } as IHttpResponse<Cryptocurrency>);
    }
}
