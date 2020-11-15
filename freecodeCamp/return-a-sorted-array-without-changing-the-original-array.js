var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  var newArr = [...arr];
  return newArr.sort((a,b)=> a -b)

  // Add your code above this line
}
nonMutatingSort(globalArray);
