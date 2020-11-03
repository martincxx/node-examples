const afterTwoSeconds = setTimeout(() => {
  console.log("executed after two seconds"), 2000;
});

const afterfiftyMil = setTimeout(() => {
  console.log("executed after 50 miliseconds");
}, 50);

const myFunction = (firstParam, secondParam) => {
  if (typeof firstParam != typeof secondParam) {
    console.log("Param type are different");
  } else console.log("Params are of the same type");
};

const id = setTimeout(myFunction, 2000, 2, "3");
//clearTimeout(id); hence it's not executed

//zero delay, executes the callback function as fast as f possible
setTimeout(() => {
  console.log("after"), 0;
});
console.log("before");

const milis = 2000;
const periodicity = `every ${milis} miliseconds`;
let count = 0;
const idInterval = setInterval(() => {
  console.log(periodicity);
  count++;
  if (count == 5) {
    clearInterval(idInterval);
    return;
  }
}, milis);
