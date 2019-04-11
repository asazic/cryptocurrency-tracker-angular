import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Cryptocurrency from '../models/cryptocurrency.model';

@Injectable()
export default class CryptocurrenciesService {
    readonly _proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    readonly _apiUrl = this._proxyUrl + 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/';

    constructor(private _http: HttpClient) { }

    public getListByFiat(fiat: string): Observable<IHttpResponse<Cryptocurrency[]>> {
        return this._http.get<IHttpResponse<Cryptocurrency[]>>(`${this._apiUrl}listings/latest?convert=${fiat}&limit=100`, {
            headers: this.setHeaders()
        });
    }

    public getDetailsByFiat(id: number, fiat: string): Observable<IHttpResponse<Cryptocurrency>> {
        return this._http.get<IHttpResponse<Cryptocurrency>>(`${this._apiUrl}quotes/latest?id=${id}&convert=${fiat}`, {
            headers: this.setHeaders()
        });
    }

    private setHeaders() {
        return {
            'X-CMC_PRO_API_KEY': 'your api key'
        };
    }
}

export interface IHttpResponse<T> {
    status: any;
    data: T;
}
