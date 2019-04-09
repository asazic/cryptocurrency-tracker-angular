// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
// import { CryptocurrenciesListComponent } from './cryptocurrencies-list.component';
// import { dummyCurrency1, dummyCurrency2 } from 'src/app/testing/dummy-data';
// import { AppTestModule } from 'src/app/testing/app-test.module';
// import { of } from 'rxjs';



// describe('CryptocurrenciesListComponent', () => {
//     let component: CryptocurrenciesListComponent;
//     let fixture: ComponentFixture<CryptocurrenciesListComponent>;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 AppTestModule,
//             ],
//         })
//         .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(CryptocurrenciesListComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should display data', () => {
//         const componentElement: HTMLElement = fixture.nativeElement;
//         component.cryptocurrencies$ = of([dummyCurrency1, dummyCurrency2]);
//         fixture.detectChanges();
//         fixture.whenRenderingDone().then(() => {
//             const trElements = componentElement.querySelectorAll('tr');
//             expect(trElements.length).toBe(3);
//         });
//     });
// });
