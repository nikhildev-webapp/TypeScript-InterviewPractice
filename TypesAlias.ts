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

//Example-Type Aliases
type PointScale = number;

type Point2D = {
    x: number,
    y:number
}

type Point3D = Point2D & {
    z:number
}

const point: Point3D = {
    x: 10,
    y: 20,
    z:30,
}

console.log('Type Aliases Example: Point');
console.log(point);

//Exercise-1-Create a userRole type
type userRole = string;
let userRole: userRole = 'Developer';
console.log('UserRole:', userRole)
console.log(`Typeof UserRole is:${typeof userRole}`);

//Exercise-2-create product status type
type productStatus = boolean | string;
let productstatus: productStatus = true ? 'Available' : 'Not-Available';
console.log('Product Stauts:',productstatus);
console.log(`Type of productstatus is:${typeof productstatus}`);

//Exercise-3-Ftech api with response type
// 1. This is our "Plate". It tells the computer exactly what a User looks like.
interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

interface ApiResponse<T> {
  status: 'success' | 'error';
  message: string;
  data: T; 
}

async function fetchUsersFromInternet(): Promise<ApiResponse<User[]>> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersList: User[] = await response.json();
    return {
      status: 'success',
      message: 'Yay! We got the users!',
      data: usersList
    };
  } catch (error) {
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
  } else {
    console.log(result.message);
  }
}
startApp();