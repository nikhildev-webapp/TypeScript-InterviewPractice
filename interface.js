"use strict";
/*
    #InterFaces:
    An Interfaces is a powerful way to define object shaps and public API contracts.
    It acts as a blue print for data,specifying and methods an objects must have
    
    #Key Features:
    1-Extension
    2-Declaration Merging
    3-Optional & Readonly fields
*/
const myCar = {
    brand: 'Tesla',
    year: 2026,
    door: 4,
    electric: true ? 'Electric' : 'Not electric',
    drive() {
        console.log('Driving Quietly...');
    }
};
console.log('Example-Vehicle Interface:');
console.log(myCar);
const user = {
    name: 'Nikhil',
    age: 21,
    isEmployeed: false ? 'Employeed' : 'UnEmployeed',
    maritualSTatus: false ? 'Married' : 'Single',
};
console.log('User Details');
console.log(user);
const product = {
    productName: 'Logitech Mx Master',
    price: 12000,
    inStock: false ? 'In-Stock' : 'Not Available'
};
console.log('Product Deatils:');
console.log(product);
const employee = {
    name: 'Nikhil',
    age: 21,
    position: 'Frontend Developer',
    isPormoted: false ? 'Pormoted' : 'Not Pormoted'
};
console.log('Employee Information');
console.log(employee);
