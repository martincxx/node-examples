function chunkArrayInGroups(arr, size) {
  let i=0, row = [], table=[];
  
  while(i < arr.length){
    row = arr.slice(i, i +size)
    table.push(row)
    i+=size;
  }
  return table;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
