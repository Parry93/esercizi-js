function getKeys(obj) {
  for (let key in obj);{
  }
    return obj;
  }
  

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);