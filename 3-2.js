let array1 = [1, 2, 3, 4, 5];
let sum = 0;
let div = array1.length;

array1.forEach( arr => {
    sum += arr;
})

sum /= div;

console.log(sum)

let array2 = [100, 101, 102];
let sum1 = 0;
let div1 = array2.length;

array2.forEach( arr => {
    sum1 += arr;
})

sum1 /= div1;

console.log(sum1)