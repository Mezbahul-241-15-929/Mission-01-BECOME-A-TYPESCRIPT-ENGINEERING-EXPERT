class Employee{
    name: string;
    salary: number;

    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;
    }
}

const employee1= new Employee("Mezbahul",50000)
const employee2= new Employee("Meraz",60000)

console.log(employee1)
console.log(employee2)

console.log(employee1 instanceof Employee)
console.log(employee2 instanceof Employee)