function countOnline(usersObj) {
  // Only change code below this line
let sum = 0;
for(let user in usersObj){
    if(usersObj[user].online){
    sum++
}
}
return sum;
  // Only change code above this line
}
