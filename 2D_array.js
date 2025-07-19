//1:Print all elements of a 2D array
// let arr = [[1, 2, 3], [4, 5, 6]];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }


//2:Sum of 2D array.
//  let arr=[[1,2,3],[1,2,3],[1,2,3]];
//  let sum=0;
//  for(let i=0;i<arr.length;i++){
//      for(let j=0;j<arr[i].length;j++){
//          sum+=arr[i][j];
//      }
//  }
//  console.log(sum);



 //3:Find maximum element in 2D array
//  let arr = [[1, 5, 3], [9, 2, 8]];
// let max = arr[0][0];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > max) {
//             max = arr[i][j];
//         }
//     }
// }
// console.log("Maximum:", max); 



//4:MINIMUM element of an 2D ARRAY.
// let arr=[[1,2,3],[0,1]];
// let min=arr[0][0];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(arr[i][j]<min){
//             min=arr[i][j]
//         }
//     }
// }
// console.log(min);



//5: Search an element in 2D array
let arr=[[1,2,3],[5,9]];
let find=5;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]==find){
            console.log("number found at index",`[${i}][${j}]`);
        }
    }
}


