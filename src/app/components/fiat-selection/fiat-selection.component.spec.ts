import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiatSelectionComponent } from './fiat-selection.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RootStoreModule, RootStoreState } from 'src/app/root-store';

describe('FiatSelectionComponent', () => {
    let component: FiatSelectionComponent;
    let fixture: ComponentFixture<FiatSelectionComponent>;
    const initialState = RootStoreState.initialState;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                RouterTestingModule
            ],
            providers: [provideMockStore({initialState})],
            declarations: [FiatSelectionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FiatSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set value EUR to select', () => {
        const compile: HTMLElement = fixture.debugElement.nativeElement;
        component.fiatReactiveForm.controls.fiatSelect.setValue('EUR');
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const select = compile.querySelector('select');
            expect(select.value).toBe('EUR');
        });
    });
});
