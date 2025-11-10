//Find the First Non-Repeating Character in a String
let str="swiss";
let n="";
for(let i=0;i<=str.length-1;i++){
    let count=0;
    for(let j=0;j<=str.length-1;j++){
        if(str[i]==str[j]){
            count++;
        }
    }
    if(count==1){
        n+=str[i]
        break
    }
}
console.log(n);


//Find Common Elements Between Two Arrays
let arr1=[1,2,3,4,20,1,10,3,9];
let arr2=[2,3,5,6,7,8,9,10,7,3];
let common=[]
for(let i=0;i<=arr1.length-1;i++){
    let count=0;
    for(let j=0;j<=arr2.length-1;j++){
        if(arr1[i]==arr2[j]){
            count++;
        }
    }
    if(count>0 && !common.includes(arr1[i])){
        common.push(arr1[i]) 
        }
}
console.log(common);