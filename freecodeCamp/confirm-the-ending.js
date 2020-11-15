function confirmEnding(str, target) {
//  oak.substr(oak.length - sf.length, sf.length) === sf
  return str.substr(str.length - target.length, target.length)=== target;
}

confirmEnding("Bastian", "n");
