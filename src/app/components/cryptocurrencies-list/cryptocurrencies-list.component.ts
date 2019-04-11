import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Cryptocurrency, { FiatProperties } from 'src/app/models/cryptocurrency.model';
import { CryptocurrencyListFacade } from 'src/app/facade/cryptocurrency-list.facade';


@Component({
    selector: 'app-cryptocurrencies-list',
    templateUrl: './cryptocurrencies-list.component.html',
    styleUrls: ['./cryptocurrencies-list.component.css']
})
export class CryptocurrenciesListComponent implements OnInit {
    public cryptocurrencies$: Observable<Cryptocurrency[]> = this.cryptoListFacade.pagedCryptocurrencies$;
    public error$: Observable<string> = this.cryptoListFacade.error$;
    public isLoading$: Observable<boolean> = this.cryptoListFacade.isLoading$;
    public currentPage = 1;
    public fiat: string = this.cryptoListFacade.fiat;
    constructor(private cryptoListFacade: CryptocurrencyListFacade) { }

    public ngOnInit() {
        this.cryptoListFacade.currentPage$.subscribe((value: number) => {
            this.currentPage = value;
        });
        this.refresh();
    }

    public refresh(): void {
        this.cryptoListFacade.loadCryptocurrencies();
    }

    public getFiatProperties(item: Cryptocurrency): FiatProperties {
        return this.cryptoListFacade.getFiatProperties(item);
    }

    public page(pageNum: number) {
        this.currentPage = pageNum;
        this.cryptoListFacade.setPage(pageNum);
    }
}
