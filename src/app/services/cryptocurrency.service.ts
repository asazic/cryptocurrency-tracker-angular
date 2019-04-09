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

    public getByFiat(fiat: string): Observable<Cryptocurrency[]> {
        return this._http.get<IHttpResponse<Cryptocurrency[]>>(`${this._apiUrl}listings/latest?convert=${fiat}&limit=100`, {
            headers: this.setHeaders()
        }).pipe(
            map((response) => response.data)
        );
    }

    public getDetailsByFiatAndBitcoin(id: number, fiat: string): Observable<Cryptocurrency> {
        // Due to free plan limitations for API we will make two requests and merge them together
        const byFiatObservable = this._http.get<IHttpResponse<Cryptocurrency>>(`${this._apiUrl}quotes/latest?id=${id}&convert=${fiat}`, {
            headers: this.setHeaders()
        });
        const byBitcoinObservable = this._http.get<IHttpResponse<Cryptocurrency>>(`${this._apiUrl}quotes/latest?id=${id}&convert=BTC`, {
            headers: this.setHeaders()
        });
        return forkJoin(byFiatObservable, byBitcoinObservable).pipe(
            map(([first, second]) => {
                const response = first.data[id] as Cryptocurrency;
                response.quote = {
                    ...(first.data[id] as Cryptocurrency).quote,
                    ...(second.data[id] as Cryptocurrency).quote
                };
                return response;
            })
        );
    }

    private setHeaders() {
        return {
            'X-CMC_PRO_API_KEY': '55c0619a-df66-4bd5-b498-c52618fe380c'
        };
    }
}

interface IHttpResponse<T> {
    status: any;
    data: T;
}
