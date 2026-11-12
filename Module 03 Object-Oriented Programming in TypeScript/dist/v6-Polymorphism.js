//? Polymorphism:
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
    calculatePay(taxRate) {
        return this.salary - this.salary * taxRate;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.salary + 5000;
    }
}
class Developer extends Employee {
    type;
    constructor(name, salary, type) {
        super(name, salary);
        this.type = type;
    }
    calculatePay(taxRate) {
        return this.salary - this.salary * taxRate;
    }
}
const employee1 = new Employee("Mezbahul", 50000);
const Manager1 = new Manager("Mizan", 50000);
const Developer1 = new Developer("Rifat", 60000, "Backend");
console.log("Employee salary: " + employee1.calculatePay(0.1));
console.log("Manager salary : " + Manager1.calculatePay());
console.log("Developer salary : " + Developer1.calculatePay(0.2));
export {};
