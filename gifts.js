function howManyGifts(maxBudget, gifts){
  let count = 0;
  let arr = []
  gifts = gifts.sort((a,b)=> a-b);
  for(let i=0; i<gifts.length; i++){
    count += gifts[i];
    arr.push(gifts[i])
    if(count> maxBudget ||count === maxBudget ){
      break
    }
  }
  if(count> maxBudget){
  return arr.length-1}
{
  return arr.length
}
}
console.log(howManyGifts(90, [
  10, 10, 10, 10, 10,
  10,  5,  5,  5,  5,
   5,  5
]))