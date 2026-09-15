"use strict";
const studentInfo = {
    name: 'Nikhil',
    class: 'XII',
    stream: 'Commerce',
    isEnrolled: true ? "Enrolled" : "Not Enrolled",
    rollNo: 2
};
console.log('Student Information:');
console.log(studentInfo);
const Employee = {
    id: 1011,
    name: 'Nikhil',
    position: 'Frontend Developer',
    isWorking: true ? 'Working' : 'Resigned',
};
console.log('Employee information');
console.log(Employee);
const userOne = {
    id: 111,
    name: "Alice",
    company: {
        name: 'TechCorp',
        address: {
            city: 'NewYork',
            postalCode: '10001'
        }
    }
};
const cityOne = userOne.company?.address.city;
console.log('Acessing the City from Nested object:', cityOne);
const personName = userOne.name;
console.log('Accessing the Person Name from Nested Object:', personName);
//Exercise-4-loop through the object
let movies = {
    movieOne: 'Harry-Potter',
    movieTwo: 'Avengers',
    movieThree: 'Spider-Man',
    movieFour: 'John Wick'
};
console.log('Loop through an object');
for (const [key, value] of Object.entries(movies)) {
    console.log(`${key}:${value}`);
}
//Exercise-5-Merge Two object
let moviesTwo = {
    moviesFive: 'Lord of the Ring',
    moviesSix: 'SpiderWick Chronicles',
    movieEight: 'Golden Compass',
    moviesNine: 'American-pie',
    moviesTen: 'VoiceMail for Issabella'
};
console.log('Merging Two Movies Object');
let allMovie = { ...movies, ...moviesTwo };
console.log('All Movies Object');
console.log(allMovie);
