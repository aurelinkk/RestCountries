const all_countries = {};
const all_currencies = {};
const all_languages = {};

function fill_db() {
    for (let country_data of countries) {
        let currencies = [];            
        let languages = [];            
        // Vérifier si la propriété "currencies" existe
        if (country_data.hasOwnProperty('currencies')) {
            for (let currency of country_data.currencies) {
                if (!all_currencies[currency.code]) {
                    all_currencies[currency.code] = new Currency(
                    currency.code,
                    currency.name,
                    currency.symbol
                    );
                }
                currencies.push(currency.code);
            }
        }

        // Vérifier si la propriété "languages" existe
        if (country_data.hasOwnProperty('languages')) {
            for (let language of country_data.languages) {
                if (!all_languages[language.iso639_2]) {
                    all_languages[language.iso639_2] = new Language(language.iso639_2, language.name);
                }
                languages.push(language.iso639_2);
            }
        }

        let country = new Country(
            country_data.alpha3Code,
            country_data.area,
            country_data.borders,
            country_data.capital,
            country_data.region,
            country_data.demonym,
            country_data.flag,
            country_data.name,
            country_data.population,
            country_data.topLevelDomain,
            currencies,
            languages
        );
                    
        //console.log(country);
        all_countries[country.alpha3Code] = country;
    }
}

fill_db();

console.log("######### Test 1 #########");
let result = outsideTheContinent();
console.log(result);

console.log("######### Test 2 #########");
let result2 = moreNeighbors();
console.log(result2);

console.log("######### Test 3 #########");
let result3 = neighborless();
console.log(result3);

console.log("######### Test 4 #########");
let result4 = moreLanguages();
console.log(result4);

console.log("######### Test 5 #########");
let result5 = withCommonLanguage();
console.log(result5);

console.log("######### Test 6 #########");
let result6 = withoutCommonCurrency();
console.log(result6);

console.log("######### Test 7 #########");
let result7 = sortingDecreasingDensity();
console.log(result7);

console.log("######### Test 8 #########");
let result8 = moreTopLevelDomains();
console.log(result8);

console.log("######### Test 9 #########");
let France = "FRA";
let result9 = veryLongTrip(France);
console.log(result9);

// Pour le pays avec le plus long chemin, il suffit d'utiliser un pays d'Amérique 
let USA = "USA";
let result9_5 = veryLongTrip(USA);
console.log(result9_5);

// Nous avons créé cette fonction pour chercher le pays avec le plus long chemin
// On la met en commentaire car elle génère beaucoup de logs inutiles
//console.log("######### Test 9.5 #########");
//findCountryWithLongestTrip();