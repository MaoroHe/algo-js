/*let serie, prod, castNumb, castName=[], cast=[]; 

function askTvSerie(serie, prod, castNumb, cast) {
    serie = prompt('Nom de votre série favorite?');
    prod = prompt('Année de production de votre série favorite?');
    castNumb = prompt('Combien de membre du cast voulez vous entrez?');

    for (let i = 0; i < castNumb; i++) {
        cast = prompt('Nom du cast?');
        castName.push(cast)
        cast = castName;
    };

    let tvSerie = {
        serie: serie,
        production_year: prod,
        cast_member: cast,
    };

    return tvSerie;
}

console.log(askTvSerie());*/


// façon je pense un peu trop compliquée de le faire et pas adaptée a la 5-2.

let serie;
let production_year;
let castNumber;
let castName = [];
let cast = [];

function askTvSerie() {
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
// Traduis notre fonction en Objet avec l'opérateur new qui.
const jsonSerie = (tvSerie);
// Crée une variable constante qui contient notre string JSON grace a la propriété JSON.stringify().

console.log(jsonSerie);
// je peu ajouter JSON.parse pour que ça s'affiche mieu au format json.

// console.log(tvserie)




// entrainement objet

// let lobject = {
//     array: "nul",
//     array2: {
//         array1: "eee",
//         fdg: "hgjk",
//         fdger: "hgjk",
//         fdge: "hgjk",
//     },
// }

// console.log(JSON.stringify(lobject))

// const jsoned = JSON.stringify(lobject);

// console.log(JSON.parse(jsoned))