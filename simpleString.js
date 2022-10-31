function solve(s) {
  let b = s.match(/[a-z]/g);
  let a = s.match(/[A-Z]/g);
  let c = s.match(/[0-9]/g);

  let arr = [];
  if (a == null) {
    arr.push(0) }else{
      arr.push(a.length)
    }
  
  if (b == null) {
    arr.push(0) }else{
      arr.push(b.length)
    }
  
  if (c == null) {
    arr.push(0)  }else{
      arr.push(c.length)
    }
    let d = s.length - arr[0]-arr[1]-arr[2];
    arr.push(d)
  return arr;}