function recuresiveBinarySearchAlgoritm(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  let mid = Math.floor((left + right) / 2);
  if (left > right) {
    return -1;
  }

  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] < target) {
    return search(arr, target, left + 1, right);
  } else {
    return search(arr, target, left, right - 1);
  }
}

console.log(recuresiveBinarySearchAlgoritm([1, 2, 3, 4, 5, 6, 7, 8], 5));

// Big - O = O(logn)
// Logorathamic beacuse we are not using any or not so that's why it's logratamic the time complexity.
