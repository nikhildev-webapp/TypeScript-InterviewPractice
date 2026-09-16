/*
    #Union Types:
    A Union Types allows a variable or parameter to hold more than one type o data.
    You use thhe pipe symbol(|) to declare that a value can be 'this type or that type'

    #Key Feature
    1-Flexibilty
    2-Type Narrowing
*/

//Variable can be a string,number or null
let applicationData: string | number | null
applicationData = 'Active';
console.log(applicationData);
applicationData = 2;
console.log(applicationData)
applicationData = null;
console.log(applicationData)

//Narrowing down a union type
function formatPrice(price: string | number) {
    if(typeof price==='string'){
        return parseFloat(price).toFixed(2)
    }

    return price.toFixed(2)
}

console.log(formatPrice('1000'))
console.log(formatPrice(2))