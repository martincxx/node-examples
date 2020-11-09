const fetch = require("node-fetch");
const URL = "https://api.github.com/users/";
const f1 = fetch(URL + "github");
const f2 = fetch(URL + "martincxx");

Promise.all([f1, f2])
  .then((res) => {
    console.log("Array of results", res);
  })
  .catch((err) => {
    console.error(err);
  });

//ES2015 destructuring assignment

Promise.all([f1, f2])
  .then(([res1, res2]) => {
    console.log("ES2015 array:", res1, res2);
  })
  .catch((err) => {
    console.error(err);
  });
