function geo_mean(nums, arith_mean) {
  const x= [...nums, arith_mean].reduce((a,b) => a+b);
  const y= [...nums, arith_mean].reduce((a,b) => a*b)
  // return x/ (nums.length+1)
  // return Math.round(Math.pow(y,(1/(nums.length+1))))

  return 
}
console.log(geo_mean([1, 3, 9, 27], 81))