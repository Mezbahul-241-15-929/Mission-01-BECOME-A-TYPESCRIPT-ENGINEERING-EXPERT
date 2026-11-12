//? Encapsulation:
//? Access Modifier:
// Public: access from any where | Syntax: public name or name
// private: access from same class | Syntax: private salary
//protected: access same class & extend child | Syntax : protected
// readonly: only can read | Syntax: public readonly name 
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    // getter method with new formate
    get baseSalary() {
        return this.salary;
    }
    // getter method with old formate
    getSalaryWithBonus() {
        return this.salary + 5000;
    }
    // setter method
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Cannot be negative number");
        }
        this.salary = newSalary;
    }
}
const employee1 = new Employee("Mezbahul", 50000);
employee1.name = "Razu";
//! employee1.salary = -520;  not working because of private modifier & error for error message: Cannot be negative number
// setter:
employee1.baseSalary = 34433;
// getter:
console.log("Salary: " + employee1.baseSalary);
console.log("Salary with Bonus: " + employee1.getSalaryWithBonus());
export {};
