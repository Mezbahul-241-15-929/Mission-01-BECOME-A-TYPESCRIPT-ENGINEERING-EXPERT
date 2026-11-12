//? Abstraction : every employee must define how their pay is calculated


abstract class Employee {
  constructor(
    public name: string,
    protected salary: number,
  ) {}

  // getter method
  get baseSalary(): number {
    return this.salary;
  }

  // setter method
  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Cannot be negative number");
    }
    this.salary = newSalary;
  }
  
  abstract calculatePay(): number;
//   abstract getResourse(): string[];
  abstract registerEntryTime(): string;
}

class Manager extends Employee {
   calculatePay() {
    return this.salary + 5000;
  }

  registerEntryTime(){
    return "13-11-26"
  }
}

class Developer extends Employee {

    calculatePay() {
    return this.salary + 5000;
    }

    registerEntryTime(){
    return "13-11-26"
  }

}

