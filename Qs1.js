// Positive or Negative number
// let n = -1;
// if (n === 0) {
//     console.log("number is zero");
// } else if (n > 0) {
//     console.log("number is positive");
// } else {
//     console.log("number is negative");
// }


// Even or Odd number:
// let num=2;
//     if(num%2==0){
//         console.log("num is even")
//     }
//     else{
//         console.log("num is odd")
//     }



// Sum of N Natural numbers:     
// let n=6;
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum)



// Sum of N Natural numbers:(2nd method)     
// function Natural(n) {
//     return n * (n + 1) / 2;
// }
// let n = 5;
// console.log(Natural(n));



// Sum of numbers in a given range:
// let n=10;
// let sum=0;
// for(let i=0;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);



// Greatest of three numbers:
// let a = 150;
// let b = 160;
// let c = 160;
// if (a > b && a > c) {
//     console.log("a is greater");
// } 
// else if (b > a && b > c) {
//     console.log("b is greater");
// }
// else if (c > a && c > b) {
//     console.log("c is greater");
// } 
// else if (a === b && b === c) {
//     console.log("All are equal");
// }
// else if (a === b && a > c) {
//     console.log("a and b are equal and greater");
// }
// else if (a === c && a > b) {
//     console.log("a and c are equal and greater");
// }
// else if (b === c && b > a) {
//     console.log("b and c are equal and greater");
// }

// let year=1200;
// if((year%4==0) && (year%100!=0)||(year%400==0)){
//     console.log("Leap year");
// }
// else{
//     console.log("not a leap year");
// }



// Prime number: 
// let n=4;
// let sum=0;
// for(let i=0;i<=n;i++){
//     if(n%i==0){
//         sum++;
//     }
// }
// if(sum==2){
//     console.log("prime")
// }
// else{
//     console.log("not a prime")
// }




// Prime number within a given range
// let num=5;
// let prime=[];
// for(let i=1;i<=num;i++){
//     let count=0;
// for(let j=1;j<=i;j++){
//     if(i%j==0){
//         count++;
//     }
// }
// if(count==2){
//     prime.push(i)
// }
// }
// console.log(prime);



// Prime number within a given range
// function Find(n) {
//     let prime = [];

//     for (let i = 1; i <= n; i++) {
//         let count = 0;

//         for (let j = 1; j <= i; j++) {
//             if (i % j === 0) {
//                 count++;
//             }
//         }

//         if (count === 2) {
//             prime.push(i);
//         }
//     }

//     return prime;
// }

// let num = 10;
// console.log("Prime numbers up to", num + ":", Find(num));



// Sum of digits of a number:
// let n=1234;
// let sum=0;
// while(n>0){
//     let rem=n%10;
//     sum=rem+sum;
//     n=parseInt(n/10);
// }
// console.log(sum);


// Reverse of a number :
// let n=1234567;
// let rev="";
// while(n>0){
//    let rem=n%10;
//     rev=rev+rem;
//     n=parseInt(n/10)
// }
// console.log(rev);




// Palindrome number
// let n = 1221;
// let temp = n;
// let rev = 0;
// while (n > 0) {
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = parseInt(n / 10);
// }
// if (rev === temp) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a palindrome");
// }




// let n = 121;
// let temp = n;       
// let rev = "";
// while (n > 0) {
//     let rem = n % 10;
//     rev+=rem;
//     n = parseInt(n / 10);
// }
// console.log(rev)
// if (rev ===temp.toString()) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a Palindrome");
// }



// Armstrong number :
// let num = 54748;
// let temp = num;
// let sum = 0;

// let digits = num.toString().length;

// while (num > 0) {
//     let rem = num % 10;
//     sum += rem ** digits;
//     num = parseInt(num / 10);
// }

// if (temp === sum) {
//     console.log("Armstrong");
// } else {
//     console.log("Not an Armstrong number");
// }




// Armstrong number in a given range :
// let n = 2000;
// let arm = [];

// for (let i = 1; i <= n; i++) {
//     let sum = 0;
//     let temp = i;
//     let digits = i.toString().length;

//     while (temp > 0) {
//         let rem = temp % 10;
//         sum += rem ** digits;
//         temp = parseInt(temp / 10);
//     }

//     if (sum === i) {
//         arm.push(i);
//     }
// }

// console.log(arm);





// Fibonacci Series up to n Terms

// let n = 20;           
// let pre = 0;
// let cur = 1;

// console.log(pre);     
// console.log(cur);     

// for (let i = 3; i <= n; i++) {
//     let new1 = pre + cur;
//     console.log(new1);
//     pre = cur;
//     cur = new1;
// }




// Fibonacci Series Less Than a Given Number (n)

// let n = 20;
// let pre = 0;
// let cur = 1;

// console.log(pre);
// console.log(cur);

// let new1 = pre + cur;

// while (new1 < n) {
//     console.log(new1);
//     pre = cur;
//     cur = new1;
//     new1 = pre + cur;
// }


// Factorial of a number
// let n=4;
// let fact=1;
// for(let i=1;i<=n;i++){
//     fact = fact*i;
// }
// console.log("Factorial of the number is:",fact);



// Power of a number :
// let n=2;
// let power=3;
// result=n**power;
// console.log(result);



// Factor of a number :
// let n=12;
// for (let i = 1; i <n; i++) {
//     if (n % i === 0) {
//         console.log(i);
//     }
// }



// Finding Prime Factors of a number :
// let n = 15;

// for (let i = 2; i <= n; i++) {
//     if (n % i === 0) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(i);
//         }
//     }
// }



// 2nd method:
// let num1 = 12;
// let fact = [];

// for (let i = 1; i <= num1; i++) {
//     if (num1 % i === 0) {
//         fact.push(i);
//     }
// }
// console.log("All factors:", fact);

// console.log("Prime factors:");
// for (let i = 0; i < fact.length; i++) {
//     let value = fact[i];
//     let count = 0;

//     for (let j = 1; j <= value; j++) {
//         if (value % j === 0) {
//             count++;
//         }
//     }

//     if (count === 2) {
//         console.log(value);
//     }
// }



// Strong number :
let n=123;
let temp=n;
let sum=0;

while(temp>0){
    let digit=temp%10;
    let fact=1;
    for(let i=1;i<=digit;i++){
        fact=fact*i;
    }
    sum=sum+fact;
    temp=parseInt(temp/10);
}
console.log("sum of factorial of its digit",sum)

if(sum===n){
    console.log(n,"is a strong number");
}
else{
    console.log(n,"is not a strong number")
}



// Perfect number : 

let num=6;
let sum1=0;
for(let i=1;i<num;i++){
    if(num%i===0){
        sum1=sum1+i;
    }
}
if(sum1==num){
    console.log("perfect number");
}
else{
    console.log("Not a perfect number");
}



// Highest Common Factor(HCF):
// function HCF(a,b){
//     let num=0;
//     for(let i=1;i<a;i++){
//         if(a%i==0 && b%i==0){
//             num=i;
//         }
//     }
//     return num;
// }
// let res=HCF(8,20);
// console.log(res);


