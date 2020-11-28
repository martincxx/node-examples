function pairElement(str) {
  var bases =[];
  function completeBase(ele){
    switch(ele){
      case "A":
        bases.push(["A", "T"]);
        break;
      case "T":
        bases.push(["T", "A"]);
        break;
      case "C":
        bases.push(["C", "G"]);
        break;
      case "G":
        bases.push(["G", "C"]);
        break;
    }
  }

  for(var i=0; str.length;i++){
    completeBase(str[i]);
  }
return bases;
}

pairElement("GCG");
