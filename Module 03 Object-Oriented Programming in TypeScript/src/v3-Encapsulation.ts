//? Encapsulation:

//? Modifier:
// Public: public name or name
// private: private name
//protected

// readonly: public readonly name

class Employee {
  constructor(
    public name: string, 
    private salary: number) {}

    // getter method with new formate
    get baseSalary(): number{
        return this.salary
    }

    // getter method with old formate
    getSalaryWithBonus():number{
        return this.salary + 5000;
    }

    // setter method
    set baseSalary(newSalary: number){
        if(newSalary < 0){
            throw new Error("Cannot be negative number");
        }
        this.salary=newSalary
    }
}

const employee1 = new Employee("Mezbahul", 50000);

employee1.name = "Razu";
//! employee1.salary = -520;  not working because of private modifier & error for error message: Cannot be negative number

// setter:
employee1.baseSalary=34433
// getter:
console.log("Salary: "+employee1.baseSalary);
console.log("Salary with Bonus: "+employee1.getSalaryWithBonus());


