const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("I did something", 3000));
  });
};
const doSomething = async () => {
  console.log(await doSomethingAsync());
};

console.log("Before");
doSomething();
console.log("After");

//another example
const aFunction = async () => {
  return "test";
};
//on browser
//aFunction().then(alert);
//console with Node
aFunction().then(console.log);
