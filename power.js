function numberToPower(number, power){
  if(power === 0){
    return 1
  }{
  let x = number ;
  for(let i = 0; i<power-1; i++ ){
    x *= number;
  }
  return x}
}
console.log(numberToPower(10,0))