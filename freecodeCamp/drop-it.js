function dropElements(arr, func) {
  const index =arr.findIndex(ele => func(ele));
 return index >= 0? arr.slice(index, arr.length):[];
  
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;})