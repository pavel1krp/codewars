// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     console.log(countArray)
//     return countArray;
//   }
// }
// console.log(countup(5));
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
      const x = rangeOfNumbers(startNum, endNum-1);
      x.push(endNum);
      return x;
  }
}
console.log(rangeOfNumbers(2,3))