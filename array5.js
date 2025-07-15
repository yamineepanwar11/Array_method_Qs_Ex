//Removing all the Zeroes 
// let arr=[1,2,0,45,221,0,78,0];
// let result=[];

// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]!==0){
//         result.push(arr[i])
//     }
// }
// console.log(result);

//Move All Zeroes To End
let arr=[1,2,0,45,221,0,78,0];
let result=[];

for(let i=0;i<=arr.length-1;i++){
    if(arr[i]!==0){
        result.push(arr[i])
    }
  
}
  while(result.length<arr.length){
        result.push(0);
    }
console.log(result);


//Reverse an Array Without Using Built-in Methods
// let arr=[1, 2, 3, 4, 5];
// let temp=[];
// let index=0;
// for (let i=arr.length-1; i>=0; i--){
//     temp[index]=arr[i];
//     index++;
// }
// console.log(temp);
