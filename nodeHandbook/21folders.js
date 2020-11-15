const fs = require("fs");
const path = require("path");
//read the content of a dir
const folderPath = "../freecodeCamp";

fs.readdirSync(folderPath);

const myFiles = fs.readdirSync(folderPath).map((fileName) => {
  return path.join(folderPath, fileName);
});

console.log(myFiles);
console.log(path.parse(folderPath.concat("/counting-cards.js")));
