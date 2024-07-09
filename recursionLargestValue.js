function recursionLargest(arr, l) {
  if (arr.length == 0) {
    return l;
  }

  if (arr[0] > l) {
    sl = l;
    l = arr[0];
  } 
  return recursionLargest(arr.slice(1), l);
}

console.log(recursionLargest([3, 4, 5, 2, 1], 0));


// Big-O = O(n) -linear.


//SECOND LARGEST

function recursionSecondLargest(arr,l,sl){
   

    if(arr.length==0){

        return sl
    }

  

    if(arr[0]>l){
        sl=l
        l=arr[0]
    }else if(arr[0]>sl&&sl<l){

        sl=arr[0]
    }

    return recursionSecondLargest(arr.slice(1),l,sl)




}

console.log(recursionSecondLargest([3,4,7,1,18,30],0));