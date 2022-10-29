var summation = function (num) {
  let arr =[];
  for(let i = 0; i<num+1; i++){
    arr.push(i);
  }
  return arr.reduce((el,e)=> el+ e)
}