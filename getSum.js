function getSum( a,b )
{ 
  let arr = [];
  if(a>b)
   for(let i = a; i<b; i++){
    arr.push(i)
   }
   if(arr.length == 0){
    return 0
   }
   return arr.reduce((a,b)=> a+b)
}
console.log(getSum(2,5))