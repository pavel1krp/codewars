function expressionMatter(a, b, c) {
  let q = a * b*c;
  let w = a * (b * c);
  let e = a+b+c;
  let r = a + b * c;
  let t = (a+b) * c;
  let y = a * (b+c);
  let sort = [q,w,r,t,e,y].sort((a,b) => a-b);
  return sort[5]
  
 }
console.log(expressionMatter(5,1,3))