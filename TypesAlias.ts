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