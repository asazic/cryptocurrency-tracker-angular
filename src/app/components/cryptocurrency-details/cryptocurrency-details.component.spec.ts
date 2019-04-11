import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptocurrencyDetailsComponent } from './cryptocurrency-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RootStoreModule } from 'src/app/root-store';
import { CryptocurrencyDetailsFacade } from 'src/app/facade/cryptocurrency-details.facade';
import { dummyCurrency1 } from 'src/app/testing/data/dummy-data';

describe('CryptocurrencyDetailsComponent', () => {
    let component: CryptocurrencyDetailsComponent;
    let fixture: ComponentFixture<CryptocurrencyDetailsComponent>;
    let detailsFacade: CryptocurrencyDetailsFacade;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                RootStoreModule
            ],
            providers: [
                CryptocurrencyDetailsFacade
            ],
            declarations: [CryptocurrencyDetailsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CryptocurrencyDetailsComponent);
        component = fixture.componentInstance;
        detailsFacade = fixture.debugElement.injector.get(CryptocurrencyDetailsFacade);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display rank from data', () => {
        const compile: HTMLElement = fixture.debugElement.nativeElement;
        component.item = dummyCurrency1;
        fixture.detectChanges();
        fixture.whenRenderingDone().then(() => {
            const firstTr = compile.querySelector('tr');
            const firstTd = compile.querySelector('td');
            expect(firstTd.textContent).toBe(dummyCurrency1.cmc_rank.toString());
        });
    });

    it('should call detailsFacade.loadCryptocurrency on refresh call', () => {
        spyOn(detailsFacade, 'loadCryptocurrency');
        component.refresh();
        expect(detailsFacade.loadCryptocurrency).toHaveBeenCalledTimes(1);
    });
});
