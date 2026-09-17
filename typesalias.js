"use strict";
/*
    #Type Aliases
    A Type Aliases created a new name for a type.Unlike interfaces,which are striclty for
    object strutures, type aliasese can respresent any type, including primitives, unions,
    tuples and intersection

    #Key Features
    1-Versatility
    2-No Merging
    3-Intersection
*/
const point = {
    x: 10,
    y: 20,
    z: 30,
};
console.log('Type Aliases Example: Point');
console.log(point);
let userRole = 'Developer';
console.log('UserRole:', userRole);
console.log(`Typeof UserRole is:${typeof userRole}`);
let productstatus = true ? 'Available' : 'Not-Available';
console.log('Product Stauts:', productstatus);
console.log(`Type of productstatus is:${typeof productstatus}`);
async function fetchUsersFromInternet() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersList = await response.json();
        return {
            status: 'success',
            message: 'Yay! We got the users!',
            data: usersList
        };
    }
    catch (error) {
        return {
            status: 'error',
            message: 'Oh no, something went wrong!',
            data: []
        };
    }
}
async function startApp() {
    const result = await fetchUsersFromInternet();
    if (result.status === 'success') {
        console.log(result.message);
        result.data.forEach(user => {
            console.log(`👋 Hi ${user.name}! You work at "${user.company.name}".`);
        });
    }
    else {
        console.log(result.message);
    }
}
startApp();
