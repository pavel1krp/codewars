function isTriangle(a,b,c)
{
   let x = [a,b,c].sort((a,b)=> a-b);
   if(x[0]+x[1]> x[2]){
      return true
   }
   return false;
}

console.log(isTriangle(7,2,2))