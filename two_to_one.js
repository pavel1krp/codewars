function longest(s1, s2) {
  return (s1+s2).split('').filter((el, index,arr) =>arr.indexOf(el)===index).sort().join('')
}
