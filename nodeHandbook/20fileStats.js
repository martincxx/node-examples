const { error } = require("console");
const fs = require("fs");
const file = "./oak.json";
fs.stat(file, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats);
});

const len = 26,
  buff = Buffer.alloc(len),
  pos = 0,
  offset = 0;

fs.open(file, "r", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.read(data, buff, offset, len, pos, (err, bytes, buff) => {
    console.log(buff.toString());
  });
});

//synchronous version

try {
  const data = fs.readFileSync(file, "utf-8");
  console.log(data);
} catch (err) {
  console.error(err);
}

//simplest way
fs.readFile(file, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
