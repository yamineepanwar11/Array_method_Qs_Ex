//1. Find Largest element in an array :
let arr = [90, 3, 4, 5, 6, 7, 89, 9, 6];
let largest = arr[0];
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest number is", largest);



//2. Find Smallest Element in an Array :
let arr1 = [90, 3, 4, 5, 6, 7, 89, 9, 6];

let smallest = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < smallest) {
        smallest = arr1[i];
    }
}

console.log("Smallest number is:", smallest);




//3. Find the Smallest and largest element in an array :
let a = [90, 3, 4, 5, 6, 7, 89, 9, 6,100,23,1];
let largest1 = a[0];
let smallest1 = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > largest1) {
        largest1 = a[i]; 
    }
    if (a[i] < smallest1) {
        smallest1 = a[i]; 
    }
}
console.log("Largest number is", largest1);
console.log("Smallest number is", smallest1);


