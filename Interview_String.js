//Reverse a String.
// let str = "I m Yaminee from medicaps";
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }
// console.log(rev);


//Check if a string is a palindrome
// let str="kaushal";
// let rev="";
// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i];
// }
// if(str==rev){
//     console.log("Palindrome");
// }
// else{
//     console.log("Not Palindrome");
// }


//Count vowels in a string
// let str = "Yaminee panwar";
// let count = 0;
// let vowels = "aeiouAEIOU";

// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count++;
//     }
// }

// console.log("Number of vowels:", count); 


// //Remove duplicates from a string
// function Dup(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         if (!result.includes(str[i])) {
//             result += str[i];
//         }
//     }

//     return result;
// }

// console.log(Dup("yaminee panwar")); 



//count characters without adding spaces.
// let s="My name is Yaminee Panwar from sanawad";
// console.log(s.length)

// let str="My name is Yaminee Panwar from sanawad";
// let count=0;
// for(let i=0;i<=str.length-1;i++){
//     if(str[i]!==' '){
//         count++
//     }
// }
// console.log(count);




//removing spaces from a string:
let str = "Yaminee panwar";
let result = "";

for (let i = 0; i <= str.length - 1; i++) {
  if (str[i] !== ' ') {
    result += str[i];
  }
}

console.log(result); 



