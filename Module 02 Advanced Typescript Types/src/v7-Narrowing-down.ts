//* typeof
let x="Hello World";
let y=100;
let z=true;
let arr=[1,2,3];
let obj={name: "John", age: 30};
let a=null;
console.log(typeof x); // string
console.log(typeof y); // number
console.log(typeof z); // boolean
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof a); // object

//* Type Guard
const print=(value: string | number) =>{
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    else{
        return value;
    }
}

//* Truthiness narrowing
type user={
    name: string;
    address?:{
        street: string;
    }
} | null;

const loggedInUser:user={
    name: "Mezbahul",
    address:{
        street: "123 Main St"
    }
}

const showAddress=(user: user)=>{
    if(user && user.address){
        console.log(user.address.street); // 123 Main St
        return;
    }
    throw new Error("User is null");

}
//* Equality narrowing
//* "in" operator narrowing
//* "instanceof" narrowing
//* Discriminated union narrowing