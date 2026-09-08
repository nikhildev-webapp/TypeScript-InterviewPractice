"use strict";
//Variable and basic type in TypeScript
//Exercise-1 create variable for username, userage, islogged in);
let username = 'John Doe';
let userage = 30;
let isLoggedIn = true;
console.log(`Username: ${username}, Age: ${userage}, Logged In: ${isLoggedIn ? "LoggedIn" : "NotLoggedIn"}`);
//Exercise2  - swap two number without third variable
let x = 5;
let y = 10;
console.log(`Before swapping: x = ${x}, y = ${y}`);
[x, y] = [y, x];
console.log(`After swapping: x = ${x}, y = ${y}`);
//Exercise-3 Calculate the area of rectangle
let length = 10;
let width = 5;
let area = length * width;
console.log(`Area of rectangle: ${area}`);
