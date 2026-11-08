//* type alias vs interface
// Type alias and interface are two ways to define types in TypeScript. They have some similarities but also some differences.
//? Interface is generally connected to objects
//? type alias is more connect to literals,union,tuples,primitives 
// & sysmbol is used to combine two types
const user1 = {
    name: "Mezbahul",
    id: 1,
    role: "admin"
};
const car1 = {
    brand: "Toyota",
    model: "Corolla"
};
const student1 = {
    name: "Mezbahul",
    age: 25,
    roll: 101,
    university: "DIU"
};
console.log(student1);
const teacher1 = {
    name: "Mezbahul",
    subject: "Math",
    age: 30
};
export {};
