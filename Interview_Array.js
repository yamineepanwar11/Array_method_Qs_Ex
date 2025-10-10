// 1: Find the maximum/minimum element in an array.
// let arr = [5, 2, 9, 1, 7, 4];
// let max = arr[0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }

//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log("Max and min value is:", max,min); 





// 2: Find the sum of all elements in an array.
// let arr=[1,2,3,4];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//    sum+=arr[i]; 
// }
// console.log(sum);




// 3: Count occurrences of a specific element.
// let arr=[1,2,3,1,2,1,5,4,1,7];
// let count=0;
// let num=1;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         count++
//     }
// }
// console.log(count);



// 4: Reverse an array.
// let arr=[1,2,3,5,6];
// let rev=[];
// for(let i=arr.length-1;i>=0;i--){
//     rev.push(arr[i]);
// }
// console.log(rev);



// 5: Print even and odd numbers from an array
// let arr=[1,2,3,4,5,6,7,8,9];
// let even=[];
// let odd=[];
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }
//     else{
//         odd.push(arr[i])
//     }
// }
// console.log(even);
// console.log(odd);



// 6:Find the longest string in an array.
// let arr=["apple","banana","mango","watermalon"];
// let count=0;
// let str="";
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i].length>count){
//         count=arr[i].length;
//         str=arr[i];
//     }
// }
// console.log(str);



// 7: Check if an array contains a specific element.
// let arr = [10, 20, 30, 40, 50];
// let target = 30;
// if (arr.includes(target)) {
//     console.log(target , "is present in the array.");
// } else {
//     console.log(target , " is NOT present in the array.");
// }



// 8: Count the number of positive/negative/zero value.
// let arr = [10, -5, 0, 8, -3, 0, 12, -7];
// let positive = 0;
// let negative = 0;
// let zero= 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         positive++;
//     } else if (arr[i] < 0) {
//         negative++;
//     } else {
//         zero++;
//     }
// }
// console.log("Positive numbers:", positive);
// console.log("Negative numbers:", negative);
// console.log("Zeroes:", zero);



// 9: Remove duplicates from an array.
// let arr=[1,2,3,2,4,5,3,1,6]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//           arr.splice(j,1)
//           j--;
//         }
//     }
// }
// console.log(arr)



// 10: Max element of an array.
// let arr = [1, 2, 3, 4, 56, 3, 2];
// let max = arr[0];  

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log("Maximum is:", max);  



// 11: Minimum element of an array.
//  let arr=[0,1,2,3,4];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log("Minimum is:", min);  



// 12: Sort an array.
// let arr = [12, 3, 4, 2, 12, 4, 1];
// let temp = 0;

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log("Sorted array:", arr);



// 13:Find the second largest number in an array
// let arr = [450, 864, 400, 2, 3, 4, 5, 6];
// let largest = arr[0];
// let sec_largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         sec_largest = largest;
//         largest = arr[i];
//     } else if (arr[i] > sec_largest && arr[i] !== largest) {
//         sec_largest = arr[i];
//     }
// }

// console.log("Largest:", largest);
// console.log("Second Largest:", sec_largest);



//14:Find missing number in an array of 1 to n.
let arr = [1, 2, 3, 5, 8,15]; 
let n = 15; 
let missing = [];

for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
        missing.push(i);
    }
}

console.log("Missing numbers are:", missing);

