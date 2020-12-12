function truthCheck(collection, pre) {
  for(let ele of collection){
    if(!ele[pre]){
      return false
    }
      
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
