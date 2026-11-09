//* some caveat of Type Guard
const printAll = (x: string | string[] | null) => {
  if (x && typeof x === "object") {
    for (const str of x) {
      console.log(str);
    }
  } else if (typeof x === "string") {
    console.log(x);
  } else {
    console.log("x is null");
  }
};

printAll("Hello World");

//* Equality narrowing
const compare = (x: string | number, y: string | boolean) => {
  if (x === y) {
    console.log("x and y are equal");
  }
};

const printAll1 = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (const str of x) {
        console.log(str);
      }
      return;
    }
    console.log(x);
  }
  console.log("x is null");
};

printAll1("Hello World2");

//* "in" operator narrowing
type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim();
};

//* "instanceof" narrowing
const date2= new Date();
const err= new Error("This is an error");

console.log(date2 instanceof Date); // true
console.log(err instanceof Error); // true

const showDate=(x: Date | string)=>{
    if(x instanceof Date){
        console.log(x.toDateString());
        return;
    }
    const date=new Date(x);
    console.log(date.toDateString());
}
showDate(new Date(""));
showDate("2023-01-01");

//* Discriminated union narrowing
interface circle{
    kind: "circle";
    radius: number;
}

interface square{
    kind: "square";
    sideLength: number;
}

const getArea=(shape: circle | square)=>{
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    else{
        return shape.sideLength ** 2;  
    }
}
getArea({kind: "circle", radius: 5});
getArea({kind: "square", sideLength: 5});