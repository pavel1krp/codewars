function maxGap (numbers){
  let arr = [];
  let sort = numbers.sort((a,b)=> b-a);
  for(let i=0; i< sort.length; i++){
    if(sort[i]>sort[i+1]){
      arr.push(sort[i]-sort[i+1]); 
    }
  }
  let sort1 = arr.sort((a,b)=> b-a);
  if(arr.length === 0){
    return 0;
  }
  return sort1[0]
}
console.log(maxGap([13,10,2,9,5]))