import { async, ComponentFixture, TestBed, inject, fakeAsync, tick, flushMicrotasks } from '@angular/core/testing';
import { CryptocurrenciesListComponent } from './cryptocurrencies-list.component';
import { of } from 'rxjs';
import { dummyCurrency1, dummyCurrency2 } from 'src/app/testing/data/dummy-data';
import { RouterTestingModule } from '@angular/router/testing';
import { RootStoreModule } from 'src/app/root-store';
import { CryptocurrencyListFacade } from 'src/app/facade/cryptocurrency-list.facade';

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
            providers: [CryptocurrencyListFacade],
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
        const compile: HTMLElement = fixture.debugElement.nativeElement;
        listFacade.allCryptocurrencies$ = of([dummyCurrency1, dummyCurrency2]);
        tick();
        fixture.whenRenderingDone().then(() => {
            const trElements = compile.querySelectorAll('tr');
            expect(trElements.length).toBe(2);
        });
    }));

    it('should display dummycurrency1 as first row', fakeAsync(() => {
        const compile: HTMLElement = fixture.debugElement.nativeElement;
        listFacade.allCryptocurrencies$ = of([dummyCurrency1, dummyCurrency2]);
        tick();
        fixture.whenStable().then(() => {
            const trElement = compile.querySelector('tr');
            const firstTd = trElement.querySelector('td');
            expect(firstTd.textContent).toBe(dummyCurrency1.cmc_rank.toString());
        });
    }));

    it('should call listFacade.loadCryptocurrencies() on refresh call', () => {
        spyOn(listFacade, 'loadCryptocurrencies');
        component.refresh();
        expect(listFacade.loadCryptocurrencies).toHaveBeenCalledTimes(1);
    });

});
