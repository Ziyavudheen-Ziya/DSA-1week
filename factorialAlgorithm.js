
function factorial(n){

    let ans = 1;

    for(i=1;i<=n;i++){

        ans = ans*i
    }

    return ans
   
      
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));

//Big-O = O(n)