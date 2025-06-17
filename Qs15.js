// Object.assign()
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);
console.log(result);

//Object.keys()
const person = { name: "Alice", age: 25 };
console.log(Object.keys(person));


//Object.values()
const person1= { name: "Alice", age:25 };
console.log(Object.values(person1));


//Object.entries()
const person2 = { name: "Alice", age: 25 };
console.log(Object.entries(person2));


//Object.fromEntries()
const entries = [["name", "Alice"], ["age", 25]];

const person3 = Object.fromEntries(entries);

console.log(person3); 

