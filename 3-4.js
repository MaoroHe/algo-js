let array1 = [21, 25, 45, 6995, 75];
let min = Number.MAX_SAFE_INTEGER;
let max = 0;

array1.forEach( arr => {
    if (arr < min) {
        min = arr;
    } else if (arr > max) {
        max = arr;
    }
})

console.log(min + ' ' + max)