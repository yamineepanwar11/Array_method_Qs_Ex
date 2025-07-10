//reverse an array
// let arr=[1,2,3,4,56,7,8,9];
// let rev=[];
// for(let i=arr.length-1;i>=0;i--){
//     rev.push(arr[i]);
// }
// console.log(rev)


//Maximum of array
// let arr=[6,2,3,1,5,6,0,98];
// let max=arr[0];
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log("Max number is:", max);


//minimum of array
// let arr=[2,1,3,42,0,-1];
// let min=arr[0];
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]<min){
//             min=arr[i]
//     }
    
// }
// console.log("minimum number is:",min);


//max and min of an array
// let a=[1,2,41,3,-1];
// let max=a[0];
// let min=a[0];
// for(let i=0;i<=a.length-1;i++){
//     if(a[i]>max){
//         max=a[i];
//     }
//     if(a[i]<min){
//         min=a[i];
//     }
// }
// console.log("Maximum number is:",max);
// console.log("Maximum number is:",min);


//Check if an array is a palindrome
let arr = [1, 2, 2, 1];
let pal = [];
let isPalindrome = true;

for (let i = arr.length - 1; i >= 0; i--) {
    pal.push(arr[i]);
}

for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== pal[j]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}
