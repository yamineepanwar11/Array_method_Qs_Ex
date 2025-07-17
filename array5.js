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
// let arr=[1,2,4,3,5,6,7,8,9];
// let evensum=0;
// let oddsum=0;
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]%2===0){
//         evensum+=arr[i];
//     }
//     else{
//         oddsum+=arr[i];
//     }
// }
// console.log(evensum);
// console.log(oddsum);


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


// 1: find the frequency of any specific number.
let arr=[1,2,3,1,2,42,1];
let num=1;
let count=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        count++;
    }
}

console.log(count);


//2:find prime
// let arr=[4,2,3,5,4,6,7,8,13,9,17,19,21];
// let count=0;
// let prime=[];
// for(let i=0;i<arr.length;i++){
//     let count=0
//     for(let j=2;j<arr[i];j++){
//         if(arr[i]%j==0){
//             count++;
//         }
//     }
//     if(count==0 && arr[i]!=1){
//         prime.push(arr[i])
//     }
// }
// console.log(prime)


//3.replce each element with product of the other

// let arr=[1,2,3,4];
// let dup=[];
// for(let i=0;i<arr.length;i++){
//     let mul=1;
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]!=arr[j]){
//         mul*=arr[j]
//     }
//     }
//     dup.push(mul)
// }
// console.log(dup)


//4.longest word in array of string

// let arr=["apple","banana","oraange","mango","lichi"];
// let len=0;
// let data=""
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length>len){
//         len=arr[i].length
//         data=arr[i]
//     }
    
// }
// console.log(data)



let a = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < a.length; i++) {
    if (!unique.includes(a[i])) {
        unique.push(a[i]);
    }
}

console.log(unique); 