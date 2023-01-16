function findUniq(arr) {
  let sorted = arr.sort()
   return sorted[0]===sorted[1]? sorted[sorted.length-1] :sorted[0]
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))