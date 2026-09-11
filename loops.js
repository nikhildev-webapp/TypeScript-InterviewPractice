"use strict";
// Loop in typescript
//Exercise-1-print the number between 1-10 and 10-1
console.log('Number 1-10');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('Number 10-1');
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//Exercise-2-print the odd and even number from 1-20 using the while loop and find the sum of evenArray and oddArray
let x = 1;
let evenArray = [];
let oddArray = [];
while (x <= 20) {
    if (x % 2 === 0) {
        evenArray.push(x);
    }
    else {
        oddArray.push(x);
    }
    x++;
}
console.log('Even Number Array', evenArray);
console.log('Odd Number Array', oddArray);
let evenSum = 0;
let oddSum = 0;
for (let num of evenArray) {
    evenSum += num;
}
for (let num of oddArray) {
    oddSum += num;
}
console.log('Sum of Even Number Array:', evenSum);
console.log('Sum of Odd Number Array', oddSum);
//Exercise-3- print the mulitplication table of 5
let x_num = 5;
let i_num = 1;
while (i_num <= 10) {
    console.log(`${x_num}*${i_num}=${x_num * i_num}`);
    i_num++;
}
