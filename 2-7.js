let chooseNumber = prompt('Select a number.');
var n = 0;
var result = 0;

if (chooseNumber != n) {
    do {
        n += 1;
        result = prompt('Number please.');
        result += result;
    } while (n != chooseNumber)
    window.alert(result)
}