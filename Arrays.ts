//Arrays in Typescript
//Exercise-1-create a string array and store the 5 studet name and print Each student name
let studentName_Array: string[] = ['Nikhil', 'Harsh', 'inderjeet', 'Vinay', 'Jitu'];
studentName_Array.forEach((n) => {
    console.log(`Student-Name:${n}`)
})

//Exercise-2-Find the largest and smallest element from array
let numArray: number[] = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 0, 1000, 1000]
let smallestNum = Math.min(...numArray);
let largestNum = Math.max(...numArray);

console.log(`Smallest Number from the Array:${smallestNum}`);
console.log(`Largest Number from the Array:${largestNum}`);

//Exercise-3-Sum the array element
let sumOfArray = numArray.reduce((i, x) => {
    return i + x;
})

console.log(`Sum of Array is:${sumOfArray}`);

//Exercise-4-Sort the array
let numberss: number[] = [40, 100, 1, 5, 25, 10]
console.log(`UnSorted Array:${numberss}`)
numberss.sort((a, b) => a - b);
console.log(`Sorted the array in ascending order:${numberss}`)
numberss.sort((a, b) => b - a);
console.log(`Sorted the array decending order:${numberss}`);

//Exercise-5-Create the student marks array and calculate the average marks
let studentMarks: number[] = [40, 100, 1, 5, 25, 10];
let totalNumberofStudent: number = studentMarks.length;
let totalOfStudentmarks: number = studentMarks.reduce((i, x) => {
    return i + x;
})
let avergaeOFCalss = totalOfStudentmarks / totalNumberofStudent;
console.log(`Average of the Class is:${avergaeOFCalss}`);