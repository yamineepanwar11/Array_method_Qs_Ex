// Reverse an Array :
let arr1 = [2, 4, 6, 8, 10];
let rev = [];
for (let i = arr1.length - 1; i >= 0; i--)
{
    rev.push(arr1[i]);
}
console.log(rev);

//2nd method of reverse an array:
let a=[1,2,3,4,5];
let reverse=[];
let j=0;
for(let i=a.length-1;i>=0;i--){
    reverse[j]=a[i];
    j++;
}
console.log(reverse);



// Sort the elements of an array :
let arr = [90,7,43,5,6,7];
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length  - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log("Sorted Array:", arr);







