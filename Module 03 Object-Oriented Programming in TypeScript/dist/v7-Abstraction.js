//? Abstraction : every employee must define how their pay is calculated
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
}
class Manager extends Employee {
    calculatePay() {
        return this.salary + 5000;
    }
    registerEntryTime() {
        return "13-11-26";
    }
}
class Developer extends Employee {
    calculatePay() {
        return this.salary + 5000;
    }
    registerEntryTime() {
        return "13-11-26";
    }
}
export {};
