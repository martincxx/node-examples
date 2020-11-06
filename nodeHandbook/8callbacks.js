//asynchronicity
const { rejects } = require("assert");
const { response } = require("express");
const fs = require("fs");
fs.readFile("./oak.json", (err, data) => {
  if (err !== null) {
    console.log(err);
    return;
  }
  console.log(data);
});

//promises
let done = true;
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "Here's the thing I built";
    resolve(workDone);
  } else {
    const why = "Still working on something else";
    reject(why);
  }
});

const checkIfItsDone = () => {
  isItDoneYet
    .then((ok) => {
      console.log(ok);
    })
    .catch((err) => {
      console.error(err);
    });
};

checkIfItsDone();

//chaining promises 107
const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};
const json = (response) => response.json;

const fetch = require("node-fetch");
fetch("https://api.github.com/users/github")
  .then(status)
  .then(json)
  .then((data) => {
    console.log("Request json response", data);
  })
  .catch((error) => console.log("Request failed", error));
