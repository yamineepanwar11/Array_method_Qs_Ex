// Finding the frequency of elements in an array :

// let arr = [1, 2, 3, 4, 5, 1, 2];

// let final = arr.reduce((prev, curr) => {
//     if (prev[curr]) {
//         prev[curr]++;
//     } else {
//         prev[curr] = 1;
//     }
//     return prev;
// }, {});

// console.log(final);



//2nd method 
let arr = [1, 2, 3, 4, 5, 1, 2];
for(let i=0;i<=arr.length-1;i++){
    let count=0;
    for (let j=0;j<=arr.length-1;j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
    console.log(arr[i]+"=>",count);
}

