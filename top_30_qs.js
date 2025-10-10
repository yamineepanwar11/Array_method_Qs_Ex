// 1: Write a program to check if a number is prime.
// let n=4;
// let sum=0;
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         sum++;
//     }
// }
// if(sum==2){
//     console.log("prime");
// }
// else{
//     console.log("Not a Prime");
// }


//2:Write a program to find all prime numbers up to n.
// let n = 20;  
// for (let i = 2; i <= n; i++) {   
//     let count = 0;

//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0) {
//             count++;
//         }
//     }

//     if (count === 2) {
//         console.log(i);
//     }
// }


//3: Find the sum of digits of a number.
let num = 23;

let result = Math.floor(num / 2) * 2;

if (result === num) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


// let num = 15;

// if (num & 1) {
//     console.log(num + " is Odd");
// } else {
//     console.log(num + " is Even");
// }
