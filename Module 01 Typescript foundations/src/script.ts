let name1 : string= "John Doe";
let numb: number = 42;
let isActive : boolean = false;
let mySymbol : symbol = Symbol();
let myBigInt : bigint = 9007199254740991n;

const addTwo= (a:number, b: number): number=>{
    return a+b ;
}

// console.log(addTwo("5",10)); typeerror: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(addTwo(50,10));

//array:
const arr: string[]= ["Mezbahul","Islam"]
const num: number[] =[10,20,30]
const arr1: Array<string>= ["Hello","world"]

//Tuple on readonly modifier
const dhakaLatLong: readonly[number,number]=[23.324,90.233]
// dhakaLatLong.push(34)  //push does not exist on type readonly
// dhakaLatLong[0]=33 //push does not exist on type readonly

//Optional parameters
const concatName= (firstName: string,lastName?:string)=>{
    if(!lastName){
        return firstName
    }
    return firstName + " " + lastName
}

console.log(concatName("Hello"))
console.log(concatName("Hello","World"))

//Default parameters
const person = (firstName: string, lastName= "Islam")=>{
    console.log(firstName + "" + lastName)
}

person("Mezbahul");  //Mezbahul Islam
person("Mezbahul","Haque") //Mezbahul Haque


//rest parameters
const sum= (...numbers: number[])=>{
    return numbers.reduce((total,sum)=>total+sum,0);
};

//not user widely
console.log(sum(1,2,3,4,5,6));

const logUserAction =(
    ...args: [name:string,age:number,isActive: boolean]
)=>{
    const [name,age]= args;
    console.log(name +"is"+age)
}

logUserAction("Meraz",20,false)