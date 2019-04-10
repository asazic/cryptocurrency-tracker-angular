import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CryptocurrencyDetailsFacade } from 'src/app/facade/cryptocurrency-details.facade';
import Cryptocurrency, { FiatProperties } from 'src/app/models/cryptocurrency.model';

@Component({
    selector: 'app-cryptocurrency-details',
    templateUrl: './cryptocurrency-details.component.html',
    styleUrls: ['./cryptocurrency-details.component.css']
})
export class CryptocurrencyDetailsComponent implements OnInit {
    public item: Cryptocurrency;
    public cryptocurrency$: Observable<Cryptocurrency> = this.cryptoDetailsFacade.cryptocurrency$;
    public error$: Observable<string> = this.cryptoDetailsFacade.error$;
    public isLoading$: Observable<boolean> = this.cryptoDetailsFacade.isLoading$;
    public fiat: string = this.cryptoDetailsFacade.fiat;
    private id: number;
    constructor(private cryptoDetailsFacade: CryptocurrencyDetailsFacade,
                private route: ActivatedRoute) { }

    public ngOnInit() {
        this.cryptocurrency$.subscribe((item: Cryptocurrency) => {
            this.item = item;
        });
        this.route.params.subscribe((params) => {
            this.id = params.id;
            if (this.id) {
                this.cryptoDetailsFacade.loadCryptocurrency(this.id);
            }
        });
    }

    public refresh(): void {
        this.cryptoDetailsFacade.loadCryptocurrency(this.id);
    }

    public getFiatProperties(item: Cryptocurrency, fiat?: string): FiatProperties {
        return this.cryptoDetailsFacade.getFiatProperties(item, fiat);
    }
}
