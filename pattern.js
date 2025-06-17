let n=5;
for(let i=1;i<=n;i++){
    let row="";
    for(let j=1;j<n-i+1;j++){
        row=row+" ";
    }
    for(let k=1;k<=i;k++){
        row=row+"*";
    }
    console.log(row);
}