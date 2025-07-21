//1:- Swapping two numbers without using a third variable
// let a=10;
// let b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b)

//2nd method to solve
let a = 10, b = 20;
[a, b] = [b, a];

console.log(a, b);


//2: check the string is palindrome or not?
let str="nitin";
let palindrome="";
for(let i=str.length-1;i>=0;i--){
    palindrome+=str[i];
}
if(str==palindrome){
    console.log("Given string is palindrome")
}
else{
    console.log("Not a palindrome")
}



//3:- remove odd numbers from an array?
// let arr=[1,2,3,4,5,6,7,8,9];
// let even_arr=[];
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]%2==0){
//         even_arr.push(arr[i])
//     }
// }
// console.log(even_arr);



//4:- Sort an array?
let arr=[43,2,1,23,34,0];
for(let i=0;i<=arr.length-1;i++){
    for(let j=0;j<=arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp
        }
    }
}
console.log(arr);