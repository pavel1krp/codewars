function digPow(n, p){
  let x = String(n).split('').map((el,i)=>Math.pow(el,p+i)).reduce((a,b) =>a+b);
  return x%n === 0? x/n : -1
}