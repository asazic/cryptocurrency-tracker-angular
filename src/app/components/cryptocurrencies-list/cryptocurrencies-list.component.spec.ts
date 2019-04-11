import { async, ComponentFixture, TestBed, inject, fakeAsync, tick, flushMicrotasks } from '@angular/core/testing';
import { CryptocurrenciesListComponent } from './cryptocurrencies-list.component';
import { of } from 'rxjs';
import { dummyCurrency1, dummyCurrency2 } from 'src/app/testing/data/dummy-data';
import { RouterTestingModule } from '@angular/router/testing';
import { RootStoreModule } from 'src/app/root-store';
import { CryptocurrencyListFacade } from 'src/app/facade/cryptocurrency-list.facade';
import CryptocurrenciesService from 'src/app/services/cryptocurrency.service';
import CryptocurrenciesServiceMock from 'src/app/testing/mock-service/cryptocurrencies-service.mock';

describe('CryptocurrenciesListComponent', () => {
    let component: CryptocurrenciesListComponent;
    let fixture: ComponentFixture<CryptocurrenciesListComponent>;
    let listFacade: CryptocurrencyListFacade;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                RootStoreModule
            ],
            providers: [
                CryptocurrencyListFacade,
                {
                    provide: CryptocurrenciesService, useClass: CryptocurrenciesServiceMock
                }
            ],
            declarations: [CryptocurrenciesListComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CryptocurrenciesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        listFacade = fixture.debugElement.injector.get(CryptocurrencyListFacade);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display data', fakeAsync(() => {
        component.cryptocurrencies$ = of([dummyCurrency2, dummyCurrency1]);
        tick();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const compile: HTMLElement = fixture.debugElement.nativeElement;
            const tbody = compile.querySelector('tbody');
            const trs = tbody.querySelectorAll('tr');
            expect(trs.length).toBe(2);
        });
    }));

    it('should display dummycurrency2 as first row', fakeAsync(() => {
        component.cryptocurrencies$ = of([dummyCurrency2, dummyCurrency1]);
        tick();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const compile: HTMLElement = fixture.debugElement.nativeElement;
            const tbody = compile.querySelector('tbody');
            const tr = tbody.querySelector('tr');
            const firstTd = tr.querySelector('td');
            expect(firstTd.textContent).toBe(dummyCurrency2.cmc_rank.toString());
        });
    }));

    it('should call listFacade.loadCryptocurrencies() on refresh call', () => {
        spyOn(listFacade, 'loadCryptocurrencies');
        component.refresh();
        expect(listFacade.loadCryptocurrencies).toHaveBeenCalledTimes(1);
    });

});
