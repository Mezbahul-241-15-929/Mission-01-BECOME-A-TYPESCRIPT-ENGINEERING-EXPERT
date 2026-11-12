//? inheritance:

class Employee {
  constructor(
    public name: string, 
    private salary: number) {}

    // getter method 
    get baseSalary(): number{
        return this.salary
    }


    // setter method
    set baseSalary(newSalary: number){
        if(newSalary < 0){
            throw new Error("Cannot be negative number");
        }
        this.salary=newSalary
    }

    describe():string{
        return `${this.name} earn ${this.salary}`;
    }
}

const employee1 = new Employee("Mezbahul", 50000);

console .log(employee1.describe())

class Manager extends Employee{
    teamMemberCount: number;

    constructor(name: string, salary: number, teamMemberCount: number){
        super(name,salary);
        this.teamMemberCount=teamMemberCount;
    }
}

const manager1= new Manager("Hasan",55000,10);
console.log(manager1)


