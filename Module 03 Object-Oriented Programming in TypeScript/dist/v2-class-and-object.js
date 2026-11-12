class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
const employee1 = new Employee("Mezbahul", 50000);
const employee2 = new Employee("Meraz", 60000);
const employee3 = new Employee("Meraz", 60000);
employee3.name = "Razu";
employee3.salary = -520;
console.log(employee1);
console.log(employee2);
console.log(employee2);
console.log(employee2.name);
console.log(employee2.salary);
console.log(employee1 instanceof Employee);
console.log(employee2 instanceof Employee);
export {};
