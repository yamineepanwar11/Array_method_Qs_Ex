                                    // Codes for Recursion
// HCF of two numbers:
// function hcf(a,b){
//     if(b===0){
//         return a
//     }
//         return hcf(b,a%b)
// }
// let res= hcf(10,20);
// console.log(res);


// LCM of two numbers :
function hcf(a,b){
    if(b===0){
        return a
    }
        return hcf(b,a%b)
}
let a=10
let b=20;
let res= hcf(a,b);
console.log("HCF is:",res);
let lcm=(a*b)/res;
console.log("LCM is :",lcm);

