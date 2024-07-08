function recursiveFibonacci(n){

    if(n<2){

        return n
    }

    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)


}

console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(8));
console.log(recursiveFibonacci(7));


//Big O =O(n) iterative
// ''   = O(2^n) Recursive  ---Name of this (Two power N)


//Compareing to Big o = O(n)  --- O(2^n) is more terrible.

// Recursion is a not a good slotion for Fabanocci sequence
// iterating is the better otion for fabanacci sequence
// because the time complecity is terrible compareing to iterarblae fabanocci. 