import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import CryptocurrenciesService from './cryptocurrency.service';
import Cryptocurrency from '../models/cryptocurrency.model';
import { dummyCurrency1, dummyCurrency2 } from '../testing/data/dummy-data';


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

    describe('#getByFiat', () => {
        it('should return an Observable<Cryptocurrency[]>', () => {
            const dummyCurrencies: Cryptocurrency[] = [dummyCurrency1, dummyCurrency2];

            service.getByFiat('BTC').subscribe(currencies => {
                expect(currencies.length).toBe(2);
                expect(currencies).toEqual(dummyCurrencies);
            });

            const req = httpMock.expectOne(`${service._apiUrl}listings/latest?convert=BTC&limit=100`);
            expect(req.request.method).toBe('GET');
            req.flush(dummyCurrencies);
        });
    });

    describe('#getDetailsByFiatAndBitcoin', () => {
        it('should return an Observable<Cryptocurrency>', () => {
            service.getDetailsByFiatAndBitcoin(1, 'USD').subscribe(currency => {
                expect(currency).toEqual(dummyCurrency1);
            });
        });
    });
});
