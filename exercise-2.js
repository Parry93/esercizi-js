// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  switch (role) {
    case "ceo":
      return "ceo => 2200";
    case "manger":
      return "manager => 1800";
    case "cto":
      return "cto => 1800";
    case "developer":
      return "developer => 1500";
    default:
      return "default => 1000";




  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);