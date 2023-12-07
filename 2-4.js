let x = 0;

while (x < 100) {
    x += 1;

    if (x % 2 == 0){
        //s'il n'y a pas de reste a notre division, notre chiffre est pair donc on le divise par deux.
        console.log(x / 2)
    } else {
        console.log(x * 3)
    }
}