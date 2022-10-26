function maxProduct(numbers, size){
  let sort = numbers.sort((a,b) => b-a);
  let count = 1;
  for(let i = 0; i< size; i++){
   count *= sort[i];
  }
  return count
}
console.log(maxProduct([4,3,5],2));