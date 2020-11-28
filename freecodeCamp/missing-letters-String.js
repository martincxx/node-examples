function fearNotLetter(str) {
  for(let i=0; i<str.length; i++){
    let missing = ""
    if((str.charCodeAt(i + 1) - str.charCodeAt(i)) > 1 ){
      missing = String.fromCharCode(str.charCodeAt(i)+1)
      console.log(missing) 
      return missing
    }  
  }
  return undefined;
}

fearNotLetter("stvwx");
