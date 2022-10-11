import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import {selectCountry, submitCountry, resetCountry, loadCountries, loadStats} from './covid.actions';
import {Country, Stats} from './models/country';

export interface AppState {
    selectedCountry?: Country,
    countries: Country[],
    stats?: Stats,
}

export const initialState: AppState = {
    selectedCountry: undefined,
    countries: [],
    stats: undefined,
};

export const covidReducer = createReducer(
  initialState,
  on(selectCountry, (state, {payload}) => ({ ...state, selectedCountry: {name: payload, code: payload}})),
  on(submitCountry, (state) => state),
  on(resetCountry, (state) => ({...state, country: '',})),
  on(loadCountries, (state, {countries}) => ({...state, countries: countries})),
  on(loadStats, (state, {data}) => ({...state, stats: data})),
  );