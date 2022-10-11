import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectCountry } from '../covid.actions';

import { CovidFormComponent } from './covid-form.component';

describe('CovidFormComponent', () => {
  let component: CovidFormComponent;
  let fixture: ComponentFixture<CovidFormComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let store: MockStore;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidFormComponent],
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            selectedCountry: undefined,
            countries: ['Spain'],
            stats: undefined,
          }
        }),

      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CovidFormComponent);
    store = TestBed.inject(MockStore);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if selectedCountry => canSubmit with ngRx', () => {
    expect(component.canSubmit()).toBe(false);
    store.setState({
      ...state,
      selectedCountry: { name: "Spain", code: "Spain" }
    });
    expect(component.canSubmit()).toBe(true);
  })

  it('if selectedCountry => canSubmit', () => {
    expect(component.canSubmit()).toBe(false);
    component.selectedCountry = { name: "Spain", code: "Spain" };
    expect(component.canSubmit()).toBe(true);
  })

});
