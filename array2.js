//even odd
// let arr=[1,2,3,4,5,6,7,8,9];
// let even=[];
// let odd=[];
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i]);
//     }
//     else{
//         odd.push(arr[i]);
//     }
// }
// console.log(even);
// console.log(odd)


//wave array
let arr=[1,2,3,4,5,67,8];
for(let i=0;i<arr.length-1;i+=2){
    let temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp; 
}
console.log(arr);

//2nd method to solve wave array
// let arr=[1,2,3,4,5,67,8];
// for(let i=0;i<arr.length-1;i+=2){
//     [arr[i], arr[i+1]]=[arr[i+1], arr[i]];
// }
// console.log(arr);




//rotate

