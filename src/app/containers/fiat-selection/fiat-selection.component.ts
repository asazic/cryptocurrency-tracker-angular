import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { RootStoreState, FiatCurrencyStoreSelectors, FiatCurrencyStoreActions } from 'src/app/root-store';

@Component({
    selector: 'app-fiat-selection',
    templateUrl: './fiat-selection.component.html',
    styleUrls: ['./fiat-selection.component.css']
})
export class FiatSelectionComponent implements OnInit {
    public fiatReactiveForm: FormGroup = new FormGroup({
        fiatSelect: new FormControl('USD')
    });
    constructor(private store: Store<RootStoreState.State>) { }

    public ngOnInit() {
        this.store.pipe(
            select(FiatCurrencyStoreSelectors.selectFiat)
        ).subscribe((fiat: string) => {
            this.fiatReactiveForm.controls['fiatSelect'].setValue(fiat);
        });
        this.fiatReactiveForm.controls['fiatSelect'].valueChanges.subscribe((value: string) => {
            this.store.dispatch(new FiatCurrencyStoreActions.ChangeFiatAction({ fiat: value }));
        })
    }
}
