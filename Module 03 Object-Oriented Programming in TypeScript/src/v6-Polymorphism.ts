//? Polymorphism:

class Employee {
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
  calculatePay(taxRate: number) {
    return this.salary - this.salary * taxRate;
  }
}

class Manager extends Employee {
  override calculatePay() {
    return this.salary + 5000;
  }
}

class Developer extends Employee {
  constructor(
    name: string,
    salary: number,
    public type: string,
  ) {
    super(name, salary);
  }
  calculatePay(taxRate: number) {
    return this.salary - this.salary * taxRate;
  }
}

const employee1 = new Employee("Mezbahul", 50000);
const Manager1 = new Manager("Mizan", 50000);
const Developer1 = new Developer("Rifat", 60000, "Backend");

console.log("Employee salary: " + employee1.calculatePay(0.1));
console.log("Manager salary : " + Manager1.calculatePay());
console.log("Developer salary : " + Developer1.calculatePay(0.2));
