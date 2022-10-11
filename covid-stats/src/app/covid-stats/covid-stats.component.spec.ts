import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CovidStatsComponent } from './covid-stats.component';
import { HttpClient } from '@angular/common/http';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('CovidStatsComponent', () => {
  let component: CovidStatsComponent;
  let fixture: ComponentFixture<CovidStatsComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let store: MockStore;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidStatsComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({}),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidStatsComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(MockStore);  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
