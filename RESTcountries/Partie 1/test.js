
// Question 1 
function outsideTheContinent() {
    let result = [];
    //console.log(all_countries);
    for (let countryCode in all_countries) {
      let country = all_countries[countryCode];
      let borders = country.borders;
      
      if (borders && borders.length > 0) {
        let sameContinent = true;
        let countryContinent = country.region;
  
        for (let border of borders) {
          let borderCountry = all_countries[border];
  
          if (borderCountry.region !== countryContinent) {
            sameContinent = false;
            break;
          }
        }
  
        if (!sameContinent) {
          result.push(country);
        }
      }
    }
  
    return result;
}

// Question 2
function moreNeighbors() {
    let maxNeighbors = 0;
    let result = [];
  
    for (let countryCode in all_countries) {
      let country = all_countries[countryCode];
      var borders = country.borders;
  
      if (borders && borders.length > maxNeighbors) {
        maxNeighbors = borders.length;
        result = [country];
        neighbours = borders;
      } else if (borders && borders.length === maxNeighbors) {
        result.push(country);
      }
    }
  
    return {result, neighbours};
  }


// Question 3
function neighborless() {
    let result = [];
  
    for (let countryCode in all_countries) {
      let country = all_countries[countryCode];
      let borders = country.borders;
  
      if (!borders || borders.length === 0) {
        result.push(country);
      }
    }
  
    return result;
  }


// Question 4
function moreLanguages() {
    let maxLanguages = 0;
    let result = [];
  
    for (let countryCode in all_countries) {
      let country = all_countries[countryCode];
      let languages = country.languages;
  
      if (languages && languages.length > maxLanguages) {
        maxLanguages = languages.length;
        result = [country];
        list_languages = languages;
      } else if (languages && languages.length === maxLanguages) {
        result.push(country);
      }

    }
  
    return {result, list_languages};
  }


// Question 5
function withCommonLanguage() {
    let result = [];
  
    for (let countryCode in all_countries) {
      let country = all_countries[countryCode];
      let borders = country.borders;
      let languages = country.languages;
  
      if (borders && borders.length > 0) {
        for (let border of borders) {
          let borderCountry = all_countries[border];
          let borderLanguages = borderCountry.languages;
  
          for (let language of languages) {
            if (borderLanguages.includes(language) && !result.includes(country)) {
              result.push(country);
              break;
            }
          }
        }
      }
    }
  
    return result;
  }


// Question 6
  function withoutCommonCurrency() {
    let result = [];
  
    for (const countryCode in all_countries) {
      let doublon = false;
      let country = all_countries[countryCode];
      let borders = country.borders;
      let currencies = country.getCurrencies();

      if (borders && borders.length > 0) {
        for (let border of borders) {
          let borderCountry = all_countries[border];
          let borderCurrencies = borderCountry.getCurrencies();
  
          for (let currency of currencies) {
            
            for (let borderCurrency of borderCurrencies) {
              if (currency === borderCurrency) {
                doublon = true;
              }
            }
          }
        }
      }
      if (doublon === false && !result.includes(country)) {
        result.push(country);
      }
  }
  return result;
}
  

// Question 7
function sortingDecreasingDensity() {
    return Country.all_countries.sort((a, b) => b.getPopDensity() - a.getPopDensity());
}


// Question 8
function moreTopLevelDomains() {
    let result = [];
  
    for (let countryCode in all_countries) {
      let country = all_countries[countryCode];
      let topLevelDomain = country.topLevelDomain;
  
      if (topLevelDomain && topLevelDomain.length > 1) {
        result.push(country);
      }
    }
  
    return result;
  }

// Question 9
/*
  function veryLongTrip(nom_pays) {
    let visited = new Set(); // Set de pays visités
    let queue = [{ country: nom_pays, path: [] }]; // Queue de pays à explorer avec le chemin parcouru
    let longestPath = []; // Chemin le plus long trouvé jusqu'à présent
    let maxCountries = 0; // Nombre de pays visités dans le chemin le plus long
  
    while (queue.length > 0) {
      const { country, path } = queue.shift();
      visited.add(country);
  
      // Trouver tous les pays frontaliers de ce pays
      if (!all_countries[country].borders) {
        console.log(`Le pays ${all_countries[country].name} n'a pas de frontières`);
        continue;
      }
      const neighbors = all_countries[country].borders.filter(
        (border) => !visited.has(border)
      );
  
      // Ajouter chaque voisin à la queue avec le chemin parcouru jusqu'à ce point
      for (const neighbor of neighbors) {
        queue.push({
          country: neighbor,
          path: [...path, all_countries[country].name],
        });
      }
  
      // Si la queue est vide, nous avons fini d'explorer tous les pays accessibles
      if (queue.length === 0) {
        console.log(`À partir de ${all_countries[nom_pays].name}, on peut visiter les pays suivants en passant par les frontières :`);
        for (const p of path) {
          console.log(`- ${p}`);
        }
        console.log(`- ${all_countries[country].name}`);
  
        // Mettre à jour le chemin le plus long si nécessaire
        if (path.length > maxCountries) {
          longestPath = path.concat(all_countries[country].name);
          maxCountries = path.length;
        }
      }
    }
  
    //console.log(`Le chemin le plus long visitant ${maxCountries} pays est :`);
    //for (const p of longestPath) {
    //  console.log(`- ${p}`);
    //}
  
    return longestPath;
  }
  

// Nous avons créé cette fonction pour chercher le pays avec le plus long chemin
// On la met en commentaire car elle génère beaucoup de logs inutiles

function findCountryWithLongestTrip() {
  let maxPathLength = 0;
  let maxPathCountry = '';

  for (const country of Object.keys(all_countries)) {
    const path = veryLongTrip(country);
    if (path.length > maxPathLength) {
      maxPathLength = path.length;
      maxPathCountry = all_countries[country].name;
    }
  }

  console.log(`Le pays avec le plus long chemin est ${maxPathCountry}, avec un total de ${maxPathLength} pays visités.`);
}
*/

function veryLongTrip(start_country) {
  const visited = new Set(); // Set de pays visités
  const path = []; // chemin parcouru jusqu'à ce point

  function explore(country) {
    visited.add(country);

    // Vérifier que le pays existe dans la base de données
    if (!all_countries[country]) {
      return;
    }

    // Vérifier que le pays a des frontières
    if (!all_countries[country].borders || all_countries[country].borders.length === 0) {
      return;
    }

    // Trouver tous les voisins non visités de ce pays
    const neighbors = all_countries[country].borders.filter(
      (border) => !visited.has(border)
    );

    // Explorer chaque voisin
    for (const neighbor of neighbors) {
      path.push(all_countries[country].name);
      explore(neighbor);
    }

    // Vérifier si au moins un voisin a été visité avant de retirer le nom du pays actuel de path
    if (path[path.length - 1] === all_countries[country].name) {
      path.pop();
    }
  }

  explore(start_country);

  const visited_list = Array.from(visited);
  return visited_list;
}
