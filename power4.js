function powerOf4(n) {
  if (typeof (n) === 'string' || n === 0) {
    return false
  }
  if (n <= 4) {
    if (n === 0 || n === 4) {
      return true
    } return false
  } else {
    return powerOf4(n % 4)
  }
}
console.log(powerOf4(16))