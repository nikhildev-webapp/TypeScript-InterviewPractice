"use strict";
/*
    #Literal Types:
    A literal type narrow down a board type(like string or number) to an exact
    specific value.
    When paired with unionTypes, they created powerful, highly slef-documenting code

    #Key Feature
    1-Exact Value Enforcment
    2-Type of Literals
*/
function setTheme(theme) {
    console.log(`Setting theme to ${theme}`);
}
setTheme('dark');
let roll = 3;
console.log(roll);
