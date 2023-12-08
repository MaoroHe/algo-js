let inputAr = ["Denis", "Robin", "Tess", "Damien", "Maoro", "Alexis", "Alice", "Aurelien", "Cassidy", "Giuseppe", "Hanen", "Huseyin", "Jeremy", "Joshua", "Julien", "Nicolas", "Marvin", "Noé", "Otman", "Mathias", "Thomas", "Ugur", "Winona"]
let n = Math.floor(Math.random() * inputAr.length)

function pickLearner(inputAr, n) {
    console.log(inputAr[n])
}

pickLearner(inputAr, n)