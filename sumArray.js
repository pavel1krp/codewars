function sum (numbers) {
  "use strict";
  if(numbers.length === 0){
    return 0
  }
  let number = numbers.filter(el => typeof el === 'number')
  return number.reduce((a,b) => a+b)
  
};
console.log(sum([]));