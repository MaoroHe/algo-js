// const serie = prompt('Your favorite serie:');
// const productionyear = prompt('Production year:');
// const cast = prompt('Cast member:');
// const tvserie = {serie: serie, production_year: productionyear, cast: cast};
// this.cast = prompt('Membre du cast:');
// console.log(tvserie);


// let tvSerie;

// function askTvSerie(tvSerie) {
//     tvSerie = {
//         serie: prompt("Série préférée?"),
//         production: prompt("Année de production?"),
//         cast: prompt("Membre du cast?"),
//     };
// }

// askTvSerie()
// console.log(JSON.stringify(tvSerie));


let serie;
let production_year;
let castNumber;
let castName = [];
let cast = [];

function askTvSerie(cast) {
    this.serie = prompt('Nom de la série:');
    this.production_year = prompt('Année de production:');
    castNumber = prompt('Combien de membre du cast voulez vous entrez:')
    
    for(let i = 0; i < castNumber; i++) {
        cast = prompt('Membre du cast:');
        castName.push(cast);
        this.cast = castName;
    }
}

const tvSerie = new askTvSerie(serie, production_year, cast);
// Traduis notre fonction en Objet avec l'opérateur new qui 
const jsonSerie = (JSON.stringify(tvSerie));
// Crée une variable constante qui contient notre string JSON grace a la propriété JSON.stringify().

console.log(JSON.parse(jsonSerie));
// je peu ajouter JSON.parse pour que ça s'affiche mieu au format json.

// console.log(tvserie)