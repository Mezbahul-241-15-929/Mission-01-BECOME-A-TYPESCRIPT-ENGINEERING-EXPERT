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