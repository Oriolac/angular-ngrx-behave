import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../covid.reducer';
import { Cases, Deaths, Stats, Tests } from '../models/country';
import { CovidHttpService } from '../services/covid-http.service';


@Component({
  selector: 'app-covid-stats',
  templateUrl: './covid-stats.component.html',
  styleUrls: ['./covid-stats.component.css']
})
export class CovidStatsComponent implements OnInit {

  stats?: Stats;
  deaths  : Deaths[] = [];
  cases  : Cases[] = [];
  tests  : Tests[] = [];

  stats$: Observable<any>;

  constructor(private store: Store<AppState>, private covidHTTP: CovidHttpService) { 
    this.stats$ = this.store.select('countries');
    this.stats$.subscribe((data) => {

      this.stats = data.stats[0];
      console.log("STATS DATA", data.stats);
      if (this.stats !== undefined) {
        let deaths = this.stats.deaths;
        this.deaths = [{...deaths, new: deaths.new === null ? "0" : deaths.new}];
        let cases = this.stats.cases;
        this.cases = [{...cases, new: cases.new === null ? "0" : cases.new}]
        this.tests = [this.stats.tests];
      }
    })
  }

  ngOnInit(): void {

  }

}
