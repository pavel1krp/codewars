function sumArray(array) {
  if(array ===null ||array ===undefined|| array.length ===0|| array.length ===1|| array.length ===2){
    return 0
  }
  let sum =0;
  let sort = array.sort((a,b)=> a-b)
  for(let i = 1; i<sort.length-1;i++){
    sum+= array[i]
  }
  return sum
}