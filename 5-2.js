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

function randomizeCast(tvSerie) {
    shuffle(cast)
    console.log(JSON.stringify(tvSerie))
}

randomizeCast(tvSerie)