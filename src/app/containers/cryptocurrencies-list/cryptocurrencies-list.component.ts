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
    public cryptocurrencies$: Observable<Cryptocurrency[]> = this.cryptoListFacade.allCryptocurrencies$;
    public error$: Observable<string> = this.cryptoListFacade.error$;
    public isLoading$: Observable<boolean> = this.cryptoListFacade.isLoading$;
    constructor(private cryptoListFacade: CryptocurrencyListFacade) { }

    public ngOnInit() {
        this.refresh();
    }

    public refresh(): void {
        this.cryptoListFacade.loadCryptocurrencies();
    }

    public getFiatProperties(item: Cryptocurrency): FiatProperties {
        return this.cryptoListFacade.getFiatProperties(item);
    }
}
