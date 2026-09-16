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
