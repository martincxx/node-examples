function titleCase(str) {
  var oak = str.toLowerCase();
  var sis = oak.split(" ");
  var newS ="";
for (var i=0; i<sis.length;i++){
    newS+=sis[i].charAt(0).toUpperCase()+sis[i].slice(1)+" ";
    
}
  return newS.trim();
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")