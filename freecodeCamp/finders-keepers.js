function findElement(arr, func) {
  let num = undefined;
  for (let a =0;a < arr.length; a++){
    if(func(arr[a])) {
      num = arr[a];
      break;
    }
      
  }
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
