function truthCheck(collection, pre) {
let truthinessArray = []
for(let ele of collection){
  truthinessArray.push(Boolean(ele[pre]))
}
console.log(truthinessArray)
console.log( truthinessArray.indexOf(false))
if(truthinessArray.indexOf(false) < 0)
return true
else 
return false
    
}
truthCheck([{"single": "yes"}], "single")
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "male"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")