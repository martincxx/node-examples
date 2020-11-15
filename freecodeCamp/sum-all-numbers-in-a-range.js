function sumAll(arr) {
  var limInf=0;
  var limSup=0;
  var sum=0;
  if(arr[0] < arr[1]){
    limInf=arr[0];
    limSup=arr[1];
  }else{
    limInf=arr[1];
    limSup=arr[0];
  }
  for(var i= limInf; i<=limSup;i++){
      sum+=i;
  }
  return sum;
}

sumAll([1, 4]);
