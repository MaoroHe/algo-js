var rdmarray = [];
let n = prompt('How much random number?')

function rand10(max) {
    return Math.floor(Math.random() * max);
    // floor = arrondi le nombre => random génère un nombre entre la valeur max et 0.
}

function multiRand(n) {
    for(let i = 0; i < n; i += 1) {
        rdmarray.push(rand10(10))
    };
}

// une boucle qui se répète autant de fois que le nombre inscrit dans le prompt n
// je push dans mon tableau(array) vide "rdmarray" et j'appelle ma fonction rand qui génère un nombre et l'ajoute dans mon array.

multiRand(n);

// j'appelle ma fonction

console.log(rdmarray);