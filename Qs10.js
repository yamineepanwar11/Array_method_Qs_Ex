let arr = [1, 2, 3, 4, 5, 1, 2];

let final = arr.reduce((prev, curr) => {
    if (prev[curr]) {
        prev[curr]++;
    } else {
        prev[curr] = 1;
    }
    return prev;
}, {});

console.log(final);
