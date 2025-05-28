const numbers1 = [3, 5, -2, 7, -9];
const firstNegative = numbers1.find(num => num < 0);
console.log(firstNegative); 



const n=[2,4,5,-8,10];
const allpositive=n.every(num=>num>0);
console.log(allpositive);


let s=[1,2,3];
s.push(4,5,6);
console.log(s);


let p=[4,5,6];
p.pop();
console.log(p);


let original=[1,2,3];
let copy=original.slice();
console.log(copy);
console.log(original===copy);


let fruits =["Banana","Mango","Apple","Papaya","Grapes"];
fruits.sort();
console.log(fruits);


let arr=[12,"up",13,"down"];
arr.reverse();
console.log(arr);


let str="Yaminee";
let reversed_str=str.split("").reverse().join("");
console.log(reversed_str);


a1=[1,2,3];
a2=[4,5,6];
let newa3=a1.concat(a2);
console.log(newa3);


let colors = ["green","red", "blue", "green", "blue", "yellow"];
let index = colors.lastIndexOf("green");
console.log(index);


const numbers=[50,60,70,20];
const sum=numbers.reduce((acc,curr)=>
    acc+curr,0
    );
console.log(sum);


let no=[10,20,30];
let addFive=no.map(no=>no+5);
console.log(addFive);


let words=["apple","Banana","Grapes","watermalon"];
let long_words=words.filter(word=>word.length>7);
console.log(long_words);