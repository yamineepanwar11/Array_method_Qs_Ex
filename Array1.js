//sort an array
// let arr=[2,34,1,3,4,67,7];
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log("Sorted array is",arr);




//Sort an Array in Ascending Order Using Bubble Sort and Then Reverse It in JavaScript.
let arr = [23, 3, 45, 6, 5, 56, 1];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}





let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

console.log(reversed);
