//WAP to find the average of an array.
let arr = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average = sum / arr.length;

console.log("Average:", average);



//WAP to find sum of elements of an array.
let arr1 = [1, 2, 3, 7, 8, 9];
let sum1 = 0;

for (let i = 0; i <= arr1.length - 1; i++) {
    sum1 += arr1[i];  
}

console.log(sum1);



//WAP to find duplicate values in an array

let a=[1,2,3,4,1,2,34,3];
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



//2nd method..
let arr2 = [1, 2, 3, 2, 4, 5, 3, 6];
let duplicates = [];

for (let i = 0; i < arr2.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
        if (arr2[i] === arr2[j] && !duplicates.includes(arr2[i])) {
            duplicates.push(arr2[i]);
        }
    }
}

console.log("Duplicates:", duplicates);

