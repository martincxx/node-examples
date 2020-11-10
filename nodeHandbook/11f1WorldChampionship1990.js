const DRIVERS = require("./constants");
const RACE = [];

function lapSpeed() {
  return Math.floor(Math.random() * (350 - 220) + 220);
}

function prepareCar(driver) {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, lapSpeed(), driver)
  );
}

function initGrid() {
  DRIVERS.forEach((driver) => RACE.push(prepareCar(driver)));
}

function raceCircuit(circuitName) {
  initGrid();
  Promise.race(RACE).then((result) => {
    console.log(`The winner of Grand Prix of ${circuitName} is ${result}`);
  });
}

raceCircuit("Imola");
