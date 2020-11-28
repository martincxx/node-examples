function pairElement(str) {
  const bases = {
    "A":"T",
    "T": "A",
    "C":"G",
    "G":"C"
  }
  const paired =[]
  for(let base of str){
    paired.push([base,bases[base]])
  }
  console.log(paired)
  return paired;
}

pairElement("GCG");
