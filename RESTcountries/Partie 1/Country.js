class Country {

  static all_countries = [];
  constructor(
    alpha3Code,
    area,
    borders,
    capital,
    region,
    demonym,
    flag,
    name,
    population,
    topLevelDomain,
    currencies,
    languages
  ) {
    this.alpha3Code = alpha3Code;
    this.area = area;
    this.borders = borders;
    this.capital = capital;
    this.region = region;
    this.demonym = demonym;
    this.flag = flag;
    this.name = name;
    this.population = population;
    this.topLevelDomain = topLevelDomain;
    this.currencies = currencies;
    this.languages = languages;

    Country.all_countries.push(this);
  }

  getPopDensity() {
    return this.population / this.area;
  }

  getBorders() {
    let borderCountries = [];
    for (let border of this.borders) {
      borderCountries.push(all_countries[border]);
    }
    return borderCountries;
  }

  getCurrencies() {
    let currencyList = [];
    for (let code of this.currencies) {
      currencyList.push(all_currencies[code]);
    }
    return currencyList;
  }

  getLanguages() {
    let languageList = [];
    for (let code of this.languages) {
      languageList.push(all_languages[code]);
    }
    return languageList;
  }

  toString() {
    return `${this.name} (${this.alpha3Code})`;
  }

}
