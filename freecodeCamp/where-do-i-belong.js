function getIndexToIns(arr, num) {
  arr.push(num)
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.indexOf(num);
}

getIndexToIns([40, 60,8], 50);
