// Binary to Decimal to conversion :
let num=101;
let count=0;
let ans=0
while(num>0){
    let a=num%10;
    ans=ans+2**count*a
    count=count+1;
    num=parseInt(num/10)
}
console.log(ans)