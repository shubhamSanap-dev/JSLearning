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

let arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

const empTCS = arrayEmployees.filter((employee)=>{
  return employee.emp_company==="TCS";

});
for(const employee of empTCS){
  console.log(`Compnany Name: ${employee.emp_company} , Employee Name: ${employee.emp_name}  `);
}
console.log("===========================================================================================================");
const empWipro = arrayEmployees.filter((employee)=>{
  return employee.emp_company==="Wipro"
})
let sum = 0
for (const employee of empWipro) {
    sum += employee.emp_salary;
}
console.log(`avarage salary of employee working in wipro: ${sum/empWipro.length}`);
console.log("===========================================================================================================");
const wiproInfy = arrayEmployees.filter((employee)=>{
  return employee.emp_company=="Infy" || employee.emp_company==="Wipro";
})
let sum2 = 0;
for (const employee of wiproInfy) {
  sum2 += employee.emp_salary
}
console.log(`avarage salary of employee working in wipro or infy: ${sum2/wiproInfy.length}`);





