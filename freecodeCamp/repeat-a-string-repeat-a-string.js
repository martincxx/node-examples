function repeatStringNumTimes(str, num) {
  let result = ""
  if(num > 0){
    let  i = 0;
    while(i < num){
      result+=str;
      i++;
    }
  }
  return result;
}

repeatStringNumTimes("abc", 3);
