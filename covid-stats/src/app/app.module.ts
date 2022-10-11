import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidFormComponent } from './covid-form/covid-form.component';
import { covidReducer } from './covid.reducer';
import { CovidStatsComponent } from './covid-stats/covid-stats.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidFormComponent,
    CovidStatsComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot(
      {
        countries: covidReducer,
      },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
