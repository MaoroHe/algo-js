let a = prompt('number you want factorial:')

function factorial(a) {
    if (a > 1) {
        return a*factorial(a-1)
    } else {
        return 1;
    }
}

// fonction recursive = fonction qui tourne dans elle MediaMetadata, une boucle.

console.log(factorial(a))