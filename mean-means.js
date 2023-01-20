function geo_mean(nums, arith_mean) {
  let x = nums.reduce((a,b)=>a+b)
  let y = arith_mean * (nums.length+1)
  nums.push(y-x)
  let arr1 = nums.reduce((a,b)=>a*b)
  return arr1 ** (1/nums.length)
}
console.log(geo_mean([1, 3, 9, 81], 24.2))