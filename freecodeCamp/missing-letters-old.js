function fearNotLetter(str) {
    let missing = str[0].charCodeAt(0); 
    for(var i=1; i<str.length; i++){
        let actual=str[i].charCodeAt(0);
         if(actual-missing>1){
             return String.fromCharCode(missing+1);
         }
         missing=actual;
    }
   return undefined;
}

fearNotLetter("abce");
