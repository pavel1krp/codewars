function getSum( a,b ){
  let sum = 0
if(a<b){
 for(let i =a; i<=b;i++){
    sum+=i;
 }}
 else{
  for(let i =b; i<=a;i++){
    sum+=i;
 }}
 return sum
}
console.log(getSum(-4,-2))