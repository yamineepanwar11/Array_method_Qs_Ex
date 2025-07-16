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
// let arr=[1,2,0,45,221,0,78,0];
// let result=[];

// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]!==0){
//         result.push(arr[i])
//     }
  
// }
//   while(result.length<arr.length){
//         result.push(0);
//     }
// console.log(result);


//Reverse an Array Without Using Built-in Methods
// let arr=[1, 2, 3, 4, 5];
// let temp=[];
// let index=0;
// for (let i=arr.length-1; i>=0; i--){
//     temp[index]=arr[i];
//     index++;
// }
// console.log(temp);




//Even and odd numbers sum
let arr=[1,2,4,3,5,6,7,8,9];
let evensum=0;
let oddsum=0;
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]%2===0){
        evensum+=arr[i];
    }
    else{
        oddsum+=arr[i];
    }
}
console.log(evensum);
console.log(oddsum);


//Same elememts of both array
let arr1=[1,2,3,4,0];
let arr2=[1,5,4,7,0,2];
let match=[];
for(let i=0;i<=arr1.length-1;i++){
    for(let j=0;j<=arr2.length-1;j++){
        if(arr1[i]===arr2[j]){
          match.push(arr1[i])  
        }
    }
}
console.log(match);
