// Highest Common Factor(HCF):
// function HCF(a,b){
//     let num=0;
//     for(let i=1;i<=a;i++){
//         if(a%i==0 && b%i==0){
//             num=i;
//         }
//     }
//     return num;
// }
// let res=HCF(10,20);
// console.log(res);





// Lowest Common Multiple (LCM) :
function HCF(a,b){
    let num=0;
    for(let i=1;i<=a;i++){
        if(a%i==0 && b%i==0){
            num=i;
        }
    }
    return num;
}
let a=10;
let b=20;
let res=HCF(a,b);
console.log(res);
let lcm=(a*b)/res;
console.log(lcm)