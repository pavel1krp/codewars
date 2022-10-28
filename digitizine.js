function digitize(n) {
  let x =n.toString().split('').reverse().map(el => el =parseInt(el));
  return x;
}