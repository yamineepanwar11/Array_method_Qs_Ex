
// Armstrong number :
let num=371;
let temp=num;
let sum=0;
while(num>0){
    let rem=num%10;
    sum=sum+rem**3;
    num=parseInt(num/10);
}
if(temp===sum){
    console.log("Armstrong");
}
else{
    console.log("Not a armstrong number")
}