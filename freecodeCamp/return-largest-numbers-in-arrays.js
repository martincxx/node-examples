function largestOfFour(arr) {
let arrMax = []
for(let i = 0; i < arr.length; i++){
  arr[i].sort((a, b ) => b - a);
  arrMax.push(arr[i][0])
}
  return arrMax;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
