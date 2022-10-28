function findNextSquare(sq) {
  if(Math.ceil(Math.sqrt(sq)) === Math.sqrt(sq)){
     return Math.pow((Math.sqrt(sq)+1),2)
   }
   return -1
 }