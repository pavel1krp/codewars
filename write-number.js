function expandedForm(num) {
  let str = '';
  s = String(num).split('').reverse().
  map((el, index, arr)=> el* Math.pow(10, index) ).
  filter(el =>el != 0).
  reverse().map(el=> str+= String(el)+' + ')
  return str.slice(0,-3)
}