const { response } = require("express");
const racing = require("./11f1WorldChampionship1990");

const first = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "First");
});

const second = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Second");
});

Promise.race([first, second]).then((result) => {
  console.log(result);
});
