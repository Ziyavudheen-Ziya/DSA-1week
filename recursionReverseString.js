function recursionReverse(val,str){

    if(val.length==0){

        return str;
    }

    str += val[val.length-1]

    return recursionReverse(val.slice(0,-1),str)

}

console.log(recursionReverse("abcde",""));

