const DRIVERS = require("./constants");
const RACE = [];

const classicRacing = {
  lapSpeed() {
    return Math.floor(Math.random() * (350 - 220) + 220);
  },

  prepareCar(driver) {
    return new Promise((resolve, reject) =>
      setTimeout(resolve, this.lapSpeed(), driver)
    );
  },

  initGrid() {
    DRIVERS.forEach((driver) => RACE.push(this.prepareCar(driver)));
  },

  raceCircuit(circuitName) {
    Promise.race(RACE).then((result) => {
      console.log(`The winner of Grand Prix of ${circuitName} is ${result}`);
    });
  },
};

module.exports = classicRacing;
