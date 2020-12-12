function steamrollArray(arr) {
  const flattenedArray = []
  function flatten(ele){
    if(!Array.isArray(ele)){
      flattenedArray.push(ele)
    } else {
      for( let a in ele){
        flatten(ele[a])
      }
    }
  }
  arr.forEach(flatten)
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
