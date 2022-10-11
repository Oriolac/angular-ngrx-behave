import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../covid.reducer';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  state$: Observable<any>;
  hasStats: boolean = false;

  constructor(private store: Store<AppState>) { 
    this.state$ = this.store.select('countries');
    this.state$.subscribe((data) => {
      console.log(data, data.stats !== undefined);
      this.hasStats = data.stats !== undefined;
    })
  }
  ngOnInit(): void {
  }

}
