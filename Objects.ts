//Objects in TypeScript
//Exercise-1-create a  Student object
type studentInfo = {
    name: string,
    class: string,
    stream: string,
    isEnrolled: boolean|string,
    rollNo:number
}
const studentInfo:studentInfo = {
    name: 'Nikhil',
    class: 'XII',
    stream: 'Commerce',
    isEnrolled: true?"Enrolled":"Not Enrolled",
    rollNo:2
}
console.log('Student Information:')
console.log(studentInfo);

//Exercise-2-create a Employee Object
type Employee = {
    id:number,
    name: string,
    position: string,
    isWorking:boolean|string,
}

const Employee: Employee = {
    id: 1011,
    name: 'Nikhil',
    position: 'Frontend Developer',
    isWorking:true?'Working':'Resigned',
}
console.log('Employee information')
console.log(Employee)

//Exercise-3-created a neseted object and accesed their value
type Address = {
    city: string,
    postalCode:string
}

type Company = {
    name: string,
    address:Address
}

type User = {
    id: number,
    name: string,
    company?:Company
}

const userOne: User = {
    id: 111,
    name: "Alice",
    company: {
        name: 'TechCorp',
        address: {
            city: 'NewYork',
            postalCode:'10001'
        }
    }
}

const cityOne = userOne.company?.address.city
console.log('Acessing the City from Nested object:', cityOne)
const personName = userOne.name;
console.log('Accessing the Person Name from Nested Object:', personName)

