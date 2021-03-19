import { useEffect } from "react";
import useSWR, { mutate } from "swr";
import { defaultJsonFetcher } from "./default-fetcher";

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}

export interface RegionalBlock {
  acronym: string;
  name: string;
  otherAcronyms: any[];
  otherNames: any[];
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBlock[];
  cioc: string;
}

const COUNTRY_LIST_ENDPOINT = "https://restcountries.eu/rest/v2/all";

function useCountryList() {
  return useSWR<Country[]>(COUNTRY_LIST_ENDPOINT, defaultJsonFetcher);
}

function CountriesPreloader() {
  useEffect(() => {
    mutate(COUNTRY_LIST_ENDPOINT, defaultJsonFetcher(COUNTRY_LIST_ENDPOINT));
  }, []);

  return null;
}

export { COUNTRY_LIST_ENDPOINT };
export { useCountryList, CountriesPreloader };
