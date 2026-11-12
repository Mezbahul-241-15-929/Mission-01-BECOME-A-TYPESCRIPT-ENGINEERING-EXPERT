//? inheritance:
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    // getter method
    get baseSalary() {
        return this.salary;
    }
    // setter method
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Cannot be negative number");
        }
        this.salary = newSalary;
    }
    describe() {
        return `${this.name} earn ${this.salary}`;
    }
}
const employee1 = new Employee("Mezbahul", 50000);
console.log(employee1.describe());
class Manager extends Employee {
    teamMemberCount;
    // teamMemberCount: number;
    // constructor(name: string, salary: number, teamMemberCount: number){
    //     super(name,salary);
    //     this.teamMemberCount=teamMemberCount;
    // }
    constructor(name, salary, teamMemberCount) {
        super(name, salary);
        this.teamMemberCount = teamMemberCount;
    }
    describeManager() {
        return `Manager: ${this.name} earn ${this.salary}`; //salary can use because of protected modifier
    }
}
const manager1 = new Manager("Hasan", 55000, 10);
console.log(manager1);
console.log(manager1.describe());
console.log(manager1.describeManager());
export {};
