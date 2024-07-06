function isPrime(n) {
  if (n <= 2) {
    return false;
  }
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPrime(2));
console.log(isPrime(5));

//Bg-O = O(n)

