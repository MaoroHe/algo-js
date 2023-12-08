let x = prompt('x1:');
let x2 = prompt('x2:');
let y = prompt('y1:');
let y2 = prompt('y2:');

function calcDistance(x, x2, y, y2) {
    // √[(x2 − x1)2 + (y2 − y1)2] <= formule.
    x -= x2;
    y -= y2;
    // soustrais les valeurs et les sauvegardes avec -=.
    x = Math.pow(x, 2);
    y = Math.pow(y, 2);
    // j'applique les exposants.
    x += y;
    // j'additionne les valeurs.
    return Math.sqrt(x);
    // racine carré => return = ce que je veu afficher quand j'appel ma fonction.
}

console.log(calcDistance(x, x2, y, y2))