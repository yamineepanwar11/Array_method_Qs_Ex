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
// let num = 23;

// let result = Math.floor(num / 2) * 2;

// if (result === num) {
//     console.log(num + " is Even");
// } else {
//     console.log(num + " is Odd");
// }


// let num = 15;

// if (num & 1) {
//     console.log(num + " is Odd");
// } else {
//     console.log(num + " is Even");
// }


//4.Find the sum of digits of a number.
let num=123;
let sum=0;
while(num>0){
    let rem=num%10;
    sum=sum+rem;
    num=parseInt(num/10);
}
console.log(sum);



//5. Check if a number is an Armstrong number.
let n=153;
let sum1=0;
let temp=n;
while(n>0){
    let rem1=n%10;
    sum1=sum1+rem1*rem1*rem1;
    n=parseInt(n/10);
}
console.log(sum1)
if(sum1==temp){
    console.log("armstrong");
}else{
    console.log("Not a armstrong");
}


//6.Generate the Fibonacci sequence up to n terms.
var a=0;
var b=1;
console.log(a)
console.log(b)
for(let i=0;i<=8;i++){
  let c=a+b;
    console.log(c)
    a=b;
    b=c;
}


//Check if a number is a Perfect number.
// let num = 28; 
// let sum = 0;

// for(let i = 1; i < num; i++) {  
//     if(num % i === 0) {         
//         sum += i;
//     }
// }

// if(sum === num) {
//     console.log(num + " is a Perfect number");
// } else {
//     console.log(num + " is not a Perfect number");
// }


