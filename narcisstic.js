function narcissistic(value) {
  return String(value).split('').map((el,i,arr)=> Math.pow(el,arr.length)).reduce((a,b)=>a+b) === value;
}
