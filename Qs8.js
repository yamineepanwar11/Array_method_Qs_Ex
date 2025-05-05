// Find Second Smallest Element in an Array : 
let a = [12,21,2,32,21,1, 2, 3, 4, 5];
let smallest = Infinity;
let second_smallest = Infinity;

for (let i = 0; i < a.length; i++) {
    if (a[i] < smallest) {
        second_smallest = smallest;
        smallest = a[i];
    } else if (a[i] < second_smallest && a[i] !== smallest) {
        second_smallest = a[i];
    }
}

console.log("Second smallest Element is:", second_smallest);


// Calculate the sum of elements in an array :
let arr=[3,4,5,5,1];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum);
