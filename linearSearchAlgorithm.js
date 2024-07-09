function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 12, 6, 8], 6));

//Big O = O(n) --it is linear search
