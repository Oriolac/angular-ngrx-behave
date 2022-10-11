export interface Country {
    name: string,
    code: string,
  }

export interface Stats {
    continent: string,
    country: string,
    population: number,
    cases: Cases,
    deaths: Deaths,
    tests: Tests,
    day: string,
    time: string,
}

export interface Cases {
    new?: string,
    active: number,
    critical: number,
    recovered: number, 
    "1M_pop": string,
    total: number,
}

export interface Deaths {
    new?: any,
    "1M_pop": string,
    total: number,
}

export interface Tests {
    "1M_pop": string,
    total: number
}