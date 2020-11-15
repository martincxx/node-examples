function reverseString(str) {
 str = str.split("");
 let arr = ""
for(let s = str.length-1; s>=0; s--){
   arr+=str[s];
}
  return arr;
}
reverseString("hello");
