import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootStoreState, FiatCurrencyStoreSelectors } from 'src/app/root-store';
import { Store, select } from '@ngrx/store';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    public currentFiat$: Observable<string> = this.store.pipe(select(FiatCurrencyStoreSelectors.selectFiat));
    constructor(private store: Store<RootStoreState.State>) { }

    public ngOnInit() {

    }

    public toggleNav(): void {
        const element = document.getElementById('navContent');
        if(element.classList.contains('show')) {
            element.classList.remove('show');
        } else {
            element.classList.add('show');            
        }
    }
}
