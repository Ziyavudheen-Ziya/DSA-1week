

function fibonacci(n){

    let arr = [0,1]

    for(i=2;i<n;i++){

         arr[i] = arr[i-1] + arr[i-2]
    }
    

    return arr


}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));

//Big-O = O(n) 


