function nbYear(p0, percent, aug, p) {
  let count = 0;
  for(let i = p0; i< p; i= Math.floor(i*(1+(percent/100))+aug))
  {
   count +=1
  }
  return count
}
console.log(nbYear(1500000, 0, 10000, 2000000))