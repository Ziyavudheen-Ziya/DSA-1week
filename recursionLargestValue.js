function recursionLargest(arr, l) {
  if (arr.length == 0) {
    return sl;
  }

  if (arr[0] > l) {
    sl = l;
    l = arr[0];
  } 
  return recursionLargest(arr.slice(1), l);
}

console.log(recursionLargest([3, 4, 5, 2, 1], 0));


