//? inheritance:

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

  describe(): string {
    return `${this.name} earn ${this.salary}`;
  }
}

const employee1 = new Employee("Mezbahul", 50000);

console.log(employee1.describe());

class Manager extends Employee {
  // teamMemberCount: number;
  // constructor(name: string, salary: number, teamMemberCount: number){
  //     super(name,salary);
  //     this.teamMemberCount=teamMemberCount;
  // }
  constructor(
    name: string,
    salary: number,
    public teamMemberCount: number,
  ) {
    super(name, salary);
  }

  describeManager(): string {
      return `Manager: ${this.name} earn ${this.salary}` //salary can use because of protected modifier
  }
}

const manager1 = new Manager("Hasan", 55000, 10);
console.log(manager1);
console.log(manager1.describe()); 
console.log(manager1.describeManager()); 
