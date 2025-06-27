// let n=5;
// for(let i=1;i<=n;i++){
//     let str='';
//     for(let j=1;j<=i;j++){
//          str+='*';
//     }
//     console.log(str);
// }

// let n=5;
// for(let i=1;i<=n;i++){
//     let str='';
//     for(let j=1;j<=n-i+1;j++){
//          str+='*';
//     }
//     console.log(str);
// }


// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
// for(let j=1;j<n-i+1;j++){
//     str+=" ";
// }   
// for(let k=1;k<=i;k++){
//     str+="*";
// } 
// console.log(str);
// }



// let n=5;
// for (let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<i;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=n-i+1;k++){
//         str+="*";
//     }
//     console.log(str);
// }



// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<n-i+1;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         str+="* ";
//     }
//     console.log(str);
// }


// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<i;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=n-i+1;k++){
//         str+="* ";
//     }
//     console.log(str);
// }


// //Square Fill Pattern
// let n=6;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=n;j++){
//         str+="* ";
//     }
//     console.log(str);
// }



// Square Hollow pattern
// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=n;j++){
//         if(i===1 || i===n || j===1 || j===n){
//             str+="* ";
//         }
//         else{
//             str+="  ";
//         }
//     }
//     console.log(str);
// }



//Number increasing pyramid
// let n=4;
// for(let i=1;i<=n;i++){
//     let str="";
// for(let j=1;j<=i;j++){
//     str+=(j)+" ";
// }
// console.log(str);
// }



//hollow triangle pattern
let n = 5;

for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1 || i === n) {
            str += "*";
        } else {
            str += " ";
        }
    }

    console.log(str);
}
