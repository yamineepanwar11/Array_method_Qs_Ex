//Sum Even Numbers in Array:
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum += arr[i];
    }
}

console.log("Sum of even numbers:", sum);

// Find first and sec_largest element in an array 
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

