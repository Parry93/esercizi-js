const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = "Simon";
// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);
// usando questo metodo creiamo un nuovo object che viene allocato nella stessa memoria del primo.
// viene preso/copiato il primo object e modificato.