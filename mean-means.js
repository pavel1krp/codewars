function geo_mean(nums, arith_mean) {
  let x = nums.reduce((a,b)=>a+b,0)
    let y = arith_mean * (nums.length+1)
    nums.push(y-x)
    let arr1 = nums.reduce((a,b)=>a*b,1)
    return arr1 ** (1/nums.length)
  }

