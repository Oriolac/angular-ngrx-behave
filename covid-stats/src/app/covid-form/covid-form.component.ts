import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCountries, loadStats } from '../covid.actions';
import { AppState } from '../covid.reducer';
import { Country } from '../models/country';
import { CovidHttpService } from '../services/covid-http.service';


@Component({
  selector: 'app-covid-form',
  templateUrl: './covid-form.component.html',
  styleUrls: ['./covid-form.component.css']
})
export class CovidFormComponent implements OnInit {


  selectedCountry?: Country | undefined;
  countries: Country[] = [];
  countries$: Observable<any>;

  constructor(private store: Store<AppState>, private covidHTTP: CovidHttpService) {
    this.covidHTTP.getAvailableCountries().subscribe(data => {
      this.store.dispatch(loadCountries({ countries:  data}));
    });
    this.countries$ = this.store.select('countries');
    this.countries$.subscribe((data) => {
      if (data !== undefined) {
        this.countries = data.countries;
      }
    })
    this.store.select('selectedCountry').subscribe((country) => {

      this.selectedCountry = country;
    })
  }

  canSubmit() {
    return this.selectedCountry !== undefined
  }

  ngOnInit(): void {
    this.countries$ = this.store.select('countries');
  }

  handleClick(event: any) {
    console.log(this.selectedCountry);
    if (this.selectedCountry === undefined) {
      return;
    }
    this.covidHTTP.getCountryCurrentInformation(this.selectedCountry.code).subscribe(data => {
        this.store.dispatch(loadStats({data : data}));
    });
  }

}
