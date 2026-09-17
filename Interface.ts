/*
    #InterFaces:
    An Interfaces is a powerful way to define object shaps and public API contracts.
    It acts as a blue print for data,specifying and methods an objects must have
    
    #Key Features:
    1-Extension
    2-Declaration Merging
    3-Optional & Readonly fields
*/

//Example-vehicle interface and use case
interface Vehicle{
    readonly brand: string,
    year: number,
    model?:string
}

interface Car extends Vehicle{
    door: number,
    drive(): void;
}

interface Car{
    electric:boolean|string
}

const myCar: Car = {
    brand: 'Tesla',
    year: 2026,
    door: 4,
    electric: true ? 'Electric' : 'Not electric',
    drive() {
        console.log('Driving Quietly...')
    }
}

console.log('Example-Vehicle Interface:');
console.log(myCar)

//Exercise-1-Create a user interface
interface User{
    name: string,
    age: number,
    isEmployeed: boolean | string,
    maritualSTatus: boolean | string,
}

const user: User = {
    name: 'Nikhil',
    age: 21,
    isEmployeed: false ? 'Employeed' : 'UnEmployeed',
    maritualSTatus:false?'Married':'Single',
}

console.log('User Details');
console.log(user)

interface Product{
    productName: string,
    price: number,
    inStock:boolean|string
}

const product: Product = {
    productName: 'Logitech Mx Master',
    price: 12000,
    inStock:false?'In-Stock':'Not Available'
}
console.log('Product Deatils:')
console.log(product);

//Exercise-3-Create Employee Interface
interface Employee{
    name: string,
    age: number,
    position: string,
    isPormoted:boolean|string
}

const employee: Employee = {
    name: 'Nikhil',
    age: 21,
    position: 'Frontend Developer',
    isPormoted:false?'Pormoted':'Not Pormoted'
}
console.log('Employee Information');
console.log(employee)