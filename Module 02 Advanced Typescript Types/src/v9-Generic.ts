// Whats problem without generic type
const wrapInArray = (value: any) => {
// const wrapInArray = (value: string| number) => {  //if this is used then it will not allow to push other type of value in the array
    return [value];
}

const stringArray = wrapInArray("Hello World");
const numberArray = wrapInArray(100);

numberArray.push(200); // no error, this is expected behavior
numberArray.push("Hello World"); // no error, but this is not expected behavior
numberArray.map((item) => item.toUpperCase(2)); // no error, but this is not expected behavior


//* Generic
const wrapInArray1 = <T>(value: T) => {
    return [value];
}

const stringArray1 = wrapInArray1("Hello World");
const numberArray1 = wrapInArray1(100);

stringArray1.map((item) => item.toUpperCase()); // no error, this is expected behavior
// numberArray1.map((item) => item.toUpperCase()); // error: Property 'toUpperCase' does not exist on type 'number'. This is expected behavior
numberArray1.map((item) => item.toFixed(2)); // no error, this is expected behavior



interface User {
    name: string;
    age: number;
}

interface BlogPost {
    title: string;
    content: string;
    date: string;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogPostResponse = ApiResponse<BlogPost>;

const userRes: UserResponse = {
    data: {
        name: "John Doe",
        age: 30
    },
    success: true,
    statusCode: 200
};
