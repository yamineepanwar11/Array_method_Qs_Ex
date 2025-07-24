//febonacci series
    let a = 0;
    let b = 1;
    let num=5;
    for(let i = 0; i < num; i++) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }


