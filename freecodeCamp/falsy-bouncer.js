function bouncer(arr) {
  let nonFalsy = []
  for(let ele of arr){
    if(ele){
      nonFalsy.push(ele)
    }
  }
  return nonFalsy;
}

bouncer([7, "ate", "", false, 9]);
