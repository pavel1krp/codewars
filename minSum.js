function minSum(arr) {
  let sort = arr.sort((a,b)=> a-b);
  let big = sort.splice(0, (sort.length+1)/2);
 sort.reverse();
  let count = 0;
  for(let i = 0; i< big.length; i++){
    count+= big[i] * sort[i]
  }
  return count
}
console.log(minSum([12,6,10,26,3,24]))