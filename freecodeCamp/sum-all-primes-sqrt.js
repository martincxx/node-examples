function sumPrimes(num) {
  function isPrime(n){
      for(let i =2; i<= Math.sqrt(n); i++){
          if(n % i === 0)
            return false
      }
    return n !== 1 && n !== 0;
    }
  
  //if(num < 1) return 0

  let sum = 0;
  for(let i = 1; i<= num; i++){
    if(isPrime(i))
    sum+=i
  }
  return sum;
}

sumPrimes(10);
