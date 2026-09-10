"use strict";
//Conditional statment in ts
//Exercise-1-check the number is positive or negative
let num_1 = 1;
if (num_1 > 0) {
    console.log('Number is positve');
}
else {
    console.log('Number is negative');
}
//Exercise-2-check the number is odd or even
let num_2 = 2;
if (num_2 % 2 === 0) {
    console.log('Number is even');
}
else {
    console.log('Number is odd');
}
//Exercise-3-check the voting age
let user_age = 1;
if (user_age >= 18) {
    console.log('You can vote');
}
else {
    console.log('Better luck next time');
}
//Exercise-4- Grade calculator using switch case
let Grade = 12;
switch (Grade) {
    case 60:
        console.log('C');
        break;
    case 75:
        console.log('B');
        break;
    case 80:
        console.log('A');
        break;
    case 90:
        console.log('Outstanding');
        break;
    default:
        console.log('Fail');
        break;
}
