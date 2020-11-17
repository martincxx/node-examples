function destroyer(...arr) {
  let target = arr[0]
  let darts = arr.slice(1,arr.length +1)
  let survivors = [];
  for(let i =0; i<target.length;i++){
    if(darts.indexOf(target[i]) < 0){
      survivors.push(target[i])
    }
  }
  console.log(survivors)
  return survivors;
}
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5)
destroyer([2, 3, 2, 3], 2, 3) 
destroyer(["tree", "hamburger", 53], "tree", 53)
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")