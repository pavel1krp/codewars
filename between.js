function betweenExtremes(numbers) {
  const x = numbers.sort((a,b)=>b-a)
  return x[0]-x[x.length-1]
}
console.log(betweenExtremes([23, 3, 19, 21, 16]))