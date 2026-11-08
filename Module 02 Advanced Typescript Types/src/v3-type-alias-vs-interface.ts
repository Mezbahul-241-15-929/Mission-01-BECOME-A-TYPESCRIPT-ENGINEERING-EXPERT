//* type alias vs interface
// Type alias and interface are two ways to define types in TypeScript. They have some similarities but also some differences.
//? Interface is generally connected to objects
//? type alias is more connect to literals,union,tuples,primitives 


//todo: Type Alias
type ID=number;

//!interface id=number; // This will throw an error because interface cannot be used to define primitive types

type Role= "admin" | "user"

//!interface Role= "admin" | "user"; // This will throw an error because interface cannot be used to define union types


interface user{
    name:string;
    id: ID;
    role: Role;
}

// & sysmbol is used to combine two types
const user1:user={
    name:"Mezbahul",
    id:1,
    role:"admin" 
}

type vehicle={
    brand:string;
}

type car=vehicle & { 
    model:string;
}

const car1:car={
    brand:"Toyota",
    model:"Corolla"
}

//todo: Interface

interface users{
    name:string;
    age:number;
}

interface student extends users{
    roll: number;
    university: string;
}

const student1: student={
    name:"Mezbahul",
    age: 25,
    roll: 101,
    university: "DIU"
}

console.log(student1)

// Interface with same name can be merged together, but type alias cannot be merged together.
//it work only for interface, not for type alias
interface teacher{
    name:string;
    subject:string;
}

interface teacher{
    age:number;
}

const teacher1: teacher={
    name:"Mezbahul",
    subject:"Math",
    age:30
}
