function palindrome(str) {
  const myRegex= /\W+|_/g;
  str = str.replace(myRegex, "");
  let reverse =  ""
  for(let i = str.length - 1; i >=0; i--){
    reverse+=str[i]
  }
  console.log(str, reverse)
  return reverse.toLowerCase()=== str.toLowerCase()
}



palindrome("eye");
palindrome("_eye")
palindrome("A man, a plan, a canal. Panama")