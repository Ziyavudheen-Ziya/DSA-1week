function recursionSum(arr,sum){
  
    if(arr.length==0){

        return sum
    }

    sum += arr[0]
    return recursionSum(arr.slice(1),sum)

}

console.log(recursionSum([1,2,3],0));

