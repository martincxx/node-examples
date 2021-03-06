const DRIVERS = require("./constants");
const RACE = [];

const lapSpeed = () => {
  return Math.floor(Math.random() * (350 - 220) + 220);
};

const prepareCar = (driver) => {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, lapSpeed(), driver)
  );
};

const initGrid = () => {
  DRIVERS.forEach((driver) => RACE.push(prepareCar(driver)));
};

const raceCircuit = (circuitName) => {
  initGrid();
  Promise.race(RACE).then((result) => {
    console.log(`The winner of Grand Prix of ${circuitName} is ${result}`);
  });
};

raceCircuit("Imola");
