function sumPrimes(num) {
  let i =0;
  let sum=0;

  function isPrime(n){
    for(var i=2;i<n;i++){
        if(n % i === 0){
          return false;
          }      
        }
        return n !== 1 && n !== 0;
  }
  while(i<=num){
    if(isPrime(i)){
      sum+=i;
    }
  i++;
  }
  return sum;
}

sumPrimes(10);
