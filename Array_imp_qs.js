// Check if an array is sorted.
let arr=[5,4,3,2,1];
let count=0;
let first=arr[0];
let second=arr[1];
if(first>second){
      count=0;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            count++;
        }
    }
    if(count==arr.length-1){
        console.log("sorted in decending order")
    }else{
         console.log("not sorted")
    }
}
else{
     count=0;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            count++;
        }
    }
    if(count==arr.length-1){
        console.log("sorted in acending order")
    }else{
         console.log("not sorted")
    }
}

  
   // Find missing number in an array of 1 to n.
// let arr=[1,2,3,5,7,10];
// let n=10;
// let missing=[];
// for(let i=1;i<=n;i++){
//     if(!arr.includes(i)){
//         missing.push(i)
//     }
// }
// console.log(missing);


// Remove duplicates from a sorted/unsorted array.
// let arr=[1,2,3,3,3,2,1,35,6,35]; 
// let dup=[];
// for(let i=0;i<=arr.length-1;i++){
//    if(!dup.includes(arr[i])){
//        dup.push(arr[i]);
//    }
// }
// console.log(dup);


//Find duplicate elements in an array
// let arr = [1, 2, 3, 2, 4, 5, 3, 6];
// let duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i]);
//         }
//     }
// }

// console.log("Duplicates:", duplicates);


//2nd method(Find duplicate elements in an array)
let a=[0,1,2,3,4,1,2,34,3,0];
let dup=[];
for(let i=0;i<a.length;i++){
    let count=0;
    for(let j=i+1;j<a.length;j++){
        if(a[i]===a[j]){
            count++;
        }
    }
    if(count>0){
        dup.push(a[i]);
    }
}
console.log(dup);


//Move all zeroes to the end of the array.

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
