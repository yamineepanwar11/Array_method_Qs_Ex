//Reverse an Array (without using reverse())
let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log(reversed); 

//2nd method
let arr1=[1, 2, 3, 4, 5,6,7,8,9];
let temp=[];
let index=0;
for (let i=arr1.length-1; i>=0; i--){
    temp[index]=arr1[i];
    index++;
}
console.log(temp);

//
