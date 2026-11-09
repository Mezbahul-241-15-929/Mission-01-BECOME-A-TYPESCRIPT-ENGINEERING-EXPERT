//* top type
let message : any="Hello World";
message=100;
message.length; // no error

let message1: unknown="Hello World";
//! message1.length; // error: Object is of type 'unknown'.

//* Core type:
const num: number=100;
const str: string="Hello World";
const bool: boolean=true;

let something: unknown; //
const num2: number=123;
something=num2; // no error


type Status="success" | "error" | "loading";
let someStatus: string
let status: Status="success";
someStatus = status; 

//* Nullish types:
const currentUser1=null; // null typ

interface User{
    name: string;
}

type LoggedInUser=User | null;

const currentUser: LoggedInUser=null; 

//* Unit type
const msg=()=>{
    console.log("Hello World");
}
msg(); // Hello World
//! const hello: string=msg();

//* subtype of unit type
const msg1=(): undefined=>{
    
    return undefined
}
const msg2:void=msg1();
console.log(msg2); // undefined


// * bottom type
const getError=(message: string): never=>{
    throw new Error(message);
}

const x: null=getError("This is an error"); // error: Type 'never' is not assignable to type 'null'.