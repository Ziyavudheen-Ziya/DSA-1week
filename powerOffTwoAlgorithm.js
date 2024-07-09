function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    } else {
      n = n / 2;

      return true;
    }
  }
}

console.log(powerOfTwo(8));
console.log(powerOfTwo(5));
console.log(powerOfTwo(4));
console.log(powerOfTwo(2));

// Execute and reducing but it's not at same amount differnet amount
// Big - O = O(logn)

//Bitwise Operation//

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) == 0;
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));

//Big-O = O(1)
