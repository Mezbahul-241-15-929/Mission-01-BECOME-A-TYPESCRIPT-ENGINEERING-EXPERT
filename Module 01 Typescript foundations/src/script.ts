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