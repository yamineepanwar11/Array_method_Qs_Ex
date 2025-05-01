//1.Power of a number
function power(a, b) {
    // Base case
    if (b === 0) {
      return 1;
    }
    // Recursive case
    return a * power(a, b - 1);
  }
  
  console.log(power(3, 3)); 


//2.factorial of a
  function factorial(n) {
    if (n === 0) return 1; 
    return n * factorial(n - 1); 
  }
  let res=factorial(4);
  console.log(res);


  
  
  
  