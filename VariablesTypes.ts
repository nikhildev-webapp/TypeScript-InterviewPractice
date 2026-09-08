//Variable and basic type in TypeScript
//Exercise-1 create variable for username, userage, islogged in);
let username: string = 'John Doe';
let userage: number = 30;
let isLoggedIn: boolean = true; 
console.log(`Username: ${username}, Age: ${userage}, Logged In: ${isLoggedIn ? "LoggedIn" : "NotLoggedIn"}`);

//Exercise2  - swap two number without third variable
let x:number = 5;
let y:number = 10;
console.log(`Before swapping: x = ${x}, y = ${y}`);
[x,y] = [y,x];
console.log(`After swapping: x = ${x}, y = ${y}`);

//Exercise-3 Calculate the area of rectangle
let length: number = 10;
let width: number = 5;
let area: number = length * width;
console.log(`Area of rectangle: ${area}`);

//Exercise-4 find the square and cube of the nuber
let X_Num: number = 2;
console.log(`Square of the Number: ${X_Num ** 2}`);
console.log(`Square of the Number: ${X_Num ** 3}`);

//Exercise-5 Create a student information programm
let StudentName: string = 'Nikhil';
let StudentAge: number = 21;
let course: string = 'Frontend Development';
console.log('Student Information:');
console.log(`StudentName:${StudentName}\nStudentAge:${StudentAge}\nCourse:${course}`)