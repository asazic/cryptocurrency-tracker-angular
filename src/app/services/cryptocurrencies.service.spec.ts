import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import CryptocurrenciesService from './cryptocurrency.service';
import Cryptocurrency from '../models/cryptocurrency.model';
import { dummyCurrency1, dummyCurrency2 } from '../testing/data/dummy-data';
import { map } from 'rxjs/operators';


describe('CryptocurrenciesService', () => {
    let injector: TestBed;
    let service: CryptocurrenciesService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CryptocurrenciesService]
        });
        injector = getTestBed();
        service = injector.get(CryptocurrenciesService);
        httpMock = injector.get(HttpTestingController);
    });

    describe('#getListByFiat', () => {
        it('should return an Observable<IHttpResponse<Cryptocurrency[]>>', () => {
            const dummyCurrencies: Cryptocurrency[] = [dummyCurrency1, dummyCurrency2];

            service.getListByFiat('BTC').subscribe(response => {
                expect(response.data.length).toBe(2);
                expect(response.data).toBe(dummyCurrencies);
            });

            const req = httpMock.expectOne(`${service._apiUrl}listings/latest?convert=BTC&limit=100`);
            expect(req.request.method).toBe('GET');
            req.flush({ data: dummyCurrencies });
            httpMock.verify();
        });
    });

    describe('#getDetailsByFiat', () => {
        it('should return an Observable<IHttpResponse<Cryptocurrency>>', () => {

            service.getDetailsByFiat(1, 'BTC').subscribe(response => {
                expect(response.data).toBe(dummyCurrency1);
            });

            const req = httpMock.expectOne(`${service._apiUrl}quotes/latest?id=1&convert=BTC`);
            expect(req.request.method).toBe('GET');
            req.flush({ data: dummyCurrency1 });
            httpMock.verify();
        });
    });
});
