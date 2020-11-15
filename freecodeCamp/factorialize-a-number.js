function factorialize(num) {
  let fact = 1;
  if(num>0){
    while(num>=1){
      fact*=num;
      num--;
    }
  }
  return fact;
}

factorialize(5);
