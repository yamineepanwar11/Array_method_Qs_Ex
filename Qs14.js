let sentence = "JavaScript is fun";
let words = sentence.split(" ");
console.log(words);   
words.join("-");   
console.log(words);              



let name = "Yaminee";
let age = 22;
let result= `Hi, I'm ${name} and I'm ${age} years old.`;
console.log(result);



function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"



function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam")); // true
