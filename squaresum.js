function squareSum(numbers){
  return numbers.length ===0?  0: numbers.map(el => el*el).reduce((el, le) => el+ le)
}