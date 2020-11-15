const squareList = (arr) => {
  // Only change code below this line
  var positive = [...arr];
  return positive.filter(n => (n > 0)&&((n-Math.floor(n))==0)).map(n => n*n);
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
