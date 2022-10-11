import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Country, Stats } from '../models/country';
import { Observable } from 'rxjs';


interface GetCountriesResponse {
  get : string,
  parameters: any[],
  errors: any[],
  results: number,
  response: string[]
}


@Injectable({
  providedIn: 'root'
})
export class CovidHttpService {
  countries: Country[] = []


  constructor(private http: HttpClient){ }
  getAvailableCountries()  {
    return this.http.get<GetCountriesResponse>('https://covid-193.p.rapidapi.com/countries', {
      headers: {
        'X-RapidAPI-Key': '655c112252mshc7c84bf7edaa8e6p118c3cjsn89a8bde8bff7',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    }
    ).pipe(map((data) => {
      return data.response.map((el) => {
        return {
          name: el,
          code: el
        }
      })

    }));
  }

  getCountryCurrentInformation(code: string) : Observable<Stats> {
    return this.http.get<any>('https://covid-193.p.rapidapi.com/statistics', {
      headers: {
      'X-RapidAPI-Key': '655c112252mshc7c84bf7edaa8e6p118c3cjsn89a8bde8bff7',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    },
    params: {
      'country' : code,
    }
    }).pipe(map((data) => {
      return data.response;
    }))
  }
}
