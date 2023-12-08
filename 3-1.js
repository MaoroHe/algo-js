let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];
let sum = 0;
let sum1 = 0;

array1.forEach( arr => {
    sum += arr;
})

array2.forEach( arr2 => {
    sum1 += arr2;
})

console.log(sum)
console.log(sum1)