function sumAll(arr) {
  let total = 0, max = Math.max(...arr), min = Math.min(...arr);
  
  for(let i = min; i <= max; i++){
    total+=i;
  }
  return total;
}

sumAll([1, 4]);
