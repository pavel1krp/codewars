function numberJoy(n) {
  let newN = String(n).split('').reduce((a,b)=>Number(a)+Number(b))
  newN1 = String(newN).split('').reverse().join('')
  return newN * newN1 === n
}
