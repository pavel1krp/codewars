function squareDigits(num){
  arr = parseInt(num.toString().split('').map(el => parseInt(el)).map(el=> Math.pow(el,2)).join(''));
  return arr;
}
console.log(squareDigits(51212))
console.log(Math.pow(2,2))