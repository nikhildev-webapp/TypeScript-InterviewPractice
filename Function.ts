//Function in Typescript
//Exercise-1-create a arrow function of add,multiply and div
const add = (x:number,y:number) => {
    console.log('Add function called');
    console.log(`Addition of two number:${x+y}`)
}

const sub = (x:number,y:number) => {
    console.log('Subtraction Function Called');
    console.log(`Subtraction of two number:${x - y}`);
}

const divi = (x:number,y:number) => {
    console.log('Division function Called');
    console.log(`Division of two number:${x/y}`)
}

add(3, 4);
sub(33, 333);
divi(3, 11);

//Exercise-2-create a function to find maximum and minimum from array
const findMaxMin = (arr:number[]) => {
    console.log('Given array:', arr)
    let max: number = Math.max(...arr)
    let mini: number = Math.min(...arr)
    console.log(`Maximum from the array:${max}\nMinimum from array:${mini}`)
}

findMaxMin([1, 2, 3, 4, 5555, 5555, 0, 121212])

//Exercise-3-create a function check the number is odd or even
const findOddEven = (x: number) => {
    if (x % 2 === 0)
    {
        console.log(`${x} is even`)
    }else{
        console.log(`${x} is odd`)
    }
}

findOddEven(3)

//Exercise-4-create a function that find area of circle
const findAreaCircle = (r: number) => {
    const pi = Math.PI
    const area = pi * (r ** 2);
    console.log(`Area of Circle is ${area}`)
}

findAreaCircle(23)

//Exercise-5-create a function reverse a string
const reveString = (str: string) => {
    console.log(`Orignal String:${str}`);
    let reveStr = '';
    for (let i = str.length - 1; i >= 0;i--){
        reveStr+=str[i]
    }
    console.log(`Reverse String:${reveStr}`)
}

reveString('hello')