function rand10(max) {
    return Math.floor(Math.random() * max);
    // floor = arrondi le nombre => random génère un nombre entre la valeur max et 0.
}

console.log(rand10(10));