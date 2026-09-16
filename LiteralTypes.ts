/*
    #Literal Types:
    A literal type narrow down a board type(like string or number) to an exact
    specific value.
    When paired with unionTypes, they created powerful, highly slef-documenting code

    #Key Feature
    1-Exact Value Enforcment
    2-Type of Literals
*/

//String Literals Union
type ThemeMod = 'light' | 'dark' | 'system';

function setTheme(theme: ThemeMod) {
    console.log(`Setting theme to ${theme}`)
}

setTheme('dark')

//Number literal Union
type DiceSide = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceSide = 3;
console.log(roll)