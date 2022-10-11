import { createAction, props } from '@ngrx/store';
import { Country, Stats } from './models/country';

export const loadCountries = createAction('[Form Component] Load Countries', props<{countries: Country[]}>());
export const loadStats = createAction('[Form Component] Load Stats', props<{data: Stats}>())

export const selectCountry = createAction('[Form Component] Select', props<{payload: string}>());
export const submitCountry = createAction('[Form Component] Submit');
export const resetCountry = createAction('[Form Component] Reset');
