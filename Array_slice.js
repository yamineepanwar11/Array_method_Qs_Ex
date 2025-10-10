let fruits = ["apple", "banana", "mango", "orange", "grape"];
let newFruits = fruits.slice(1, 4);

console.log(newFruits);   
console.log(fruits);      


let fruits = ["apple", "orange"];
fruits.splice(1, 0, "banana", "mango");

console.log(fruits);  // ["apple", "banana", "mango", "orange"]


let fruits = ["apple", "banana", "mango"];
fruits.splice(1, 1, "kiwi");

console.log(fruits);  // ["apple", "kiwi", "mango"]

