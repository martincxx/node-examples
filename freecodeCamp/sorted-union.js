function uniteUnique(...arr) {
  const mySet =new Set(arr.flat()) 
  let unique =Array.from(mySet)
  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
