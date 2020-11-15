function findLongestWordLength(str) {
  let sentence = str.split(" ");
  sentence.sort((a, b) => b.length -a.length)
  return sentence[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
