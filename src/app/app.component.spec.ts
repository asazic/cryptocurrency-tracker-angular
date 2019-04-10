import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { provideMockStore } from '@ngrx/store/testing';
import { MatIconModule } from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatIconModule
            ],
            declarations: [
                AppComponent,
                ToolbarComponent,
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                provideMockStore()
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
