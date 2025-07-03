//Reverse an Array (without using reverse())
// let arr = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }
// console.log(reversed); 


//2nd method
// let arr1=[1, 2, 3, 4, 5,6,7,8,9];
// let temp=[];
// let index=0;
// for (let i=arr1.length-1; i>=0; i--){
//     temp[index]=arr1[i];
//     index++;
// }
// console.log(temp);



//Sum of an array
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// console.log(sum);  



//Avg of element in an array..
// let arr=[1,2,3,4,5,6,7];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(sum/arr.length);



// largest element of an array
// let arr=[2,19,45,67,4,6,8];
// let largest=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }
// }
// console.log(largest);



//smallest element of an array
// let arr=[1,2,3,0,2,5,6];
// let smallest=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<smallest){
//         smallest=arr[i];
//     }
// }
// console.log(smallest);




//Duplicates element of an array..
let arr=[1,2,3,1,23,2,3,4,4,1,2,1];
let dup=[];
for(let i=0;i<arr.length;i++){
    let count =0
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++
        }
    }
    if(count>0 && !dup.includes(arr[i])){
                dup.push(arr[i]);
    }
}
console.log(dup);


