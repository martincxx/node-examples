function titleCase(str) {
  str = str.toLowerCase().split(" ")
  let sentence = []

  for(let i in str){
    sentence.push(str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase()))
  }
  return sentence.join(" ");
}

titleCase("I'm a little tea pot");
