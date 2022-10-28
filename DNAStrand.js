function DNAStrand(dna) {
  let x = dna.split('')
  for(let i = 0; i<x.length; i++){
    if (x[i] =='A') {
      x[i] = 'T'
    } else if (x[i] == 'T') {
      x[i] = 'A'
    } else if (x[i] == 'C') {
      x[i] = 'G'
    } else{
      x[i] = 'C'
    }
  }
  return x.join('')
}
console.log(DNAStrand("AAAFGC"))