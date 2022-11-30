function rowSumOddNumbers(n) {
  let x = 0;
	for(let i = 1; i<= n; i+=2){
    x+= i
  }
  return x
}
console.log(rowSumOddNumbers(1))