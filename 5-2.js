let serie, prod, castNumb, castName=[], cast=[]; 

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

console.log(askTvSerie());

function randomizeCast(tvserie) {
    
}