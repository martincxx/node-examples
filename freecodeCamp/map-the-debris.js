function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  const orbPeriod = (a) => Math.round(2 * Math.PI * Math.sqrt((a + earthRadius)**3/GM));
  for(let sat of arr){
    sat.orbitalPeriod = orbPeriod(sat.avgAlt);
    delete sat.avgAlt;
  }
  console.log(arr)
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
