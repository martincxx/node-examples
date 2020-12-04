function convertHTML(str) {
const escapeChar = {
  ">":"&gt;",
  "<":"&lt;",
  "&":"&amp;",
  "\"":"&quot;",
  "'":"&apos;",
}
let final =[]
for(let s of str){
  if(escapeChar[s]){
    s = escapeChar[s]
  }
  final.push(s)
}
console.log(final)
 return final.join("");
}

convertHTML("Dolce & Gabbana");
