class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
   
const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

const wiproEmp = arrayEmps.filter((Employee)=>{
    return Employee.emp_company==="Wipro";
});
for (const employee of wiproEmp) {
    console.log(`Employee name: ${employee.emp_name} , Company name: ${employee.emp_company}`);
}
console.log("=================================================================================================================");

const empItHr = arrayEmps.filter((Employee)=>{
    return Employee.emp_dept==="IT" || Employee.emp_dept==="HR";
});
for (const emp of empItHr) {
    console.log(`Employee name: ${emp.emp_name} , Department: ${emp.emp_dept}`);
}
console.log("=================================================================================================================");

const greaterThan = arrayEmps.filter((Employee)=>{
    return Employee.emp_salary>50;
});
for (const emp of greaterThan) {
    console.log(`Employee name: ${emp.emp_name} , salary: ${emp.emp_salary}`);
};
console.log("=================================================================================================================");

const startWith = arrayEmps.filter((Employee)=>{
    return Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("V") || Employee.emp_name.startsWith("M");
});
for (const emp1 of startWith) {
    console.log(`Emp name starts with A, V, M are: ${emp1.emp_name}`);
}
console.log("=================================================================================================================");

const sumSal = arrayEmps.reduce((total, employee)=>{
    return total + employee.emp_salary;
},0)

console.log("Average salary of all employees:",sumSal/arrayEmps.length);
console.log("=================================================================================================================");

const arrIt = arrayEmps.filter((value)=>{
    return value.emp_dept==="IT";
});
const itAvg = arrIt.reduce((total, emp)=>{
    return total + emp.emp_salary;
},0)
console.log(`Average salary of employees working in IT dept: ${itAvg/arrIt.length}`);