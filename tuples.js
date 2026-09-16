"use strict";
/*
    #Tuples:
    A tuples is an array with a fixed lenght where the type of each element is
    predefined based on its specific index position

    #Key Feature
    1-Strict Array Struturing
    2-Destruturing
*/
const user = ['Alice', 22, true];
let userName = user[0];
let userAge = user[1];
console.log(`UserName:${userName}\nUserAge:${userAge}`);
//Destructuring a tuple
const [names, age, admin] = user;
console.log(user[0]);
console.log(user[1]);
//Loop through array
console.log('Loop Throug array');
user.forEach((i) => {
    console.log(`typeOf:${i}:${typeof i}`);
});
