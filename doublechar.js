function doubleChar(str) {
  let arr = [];
   for(let i = 0; i<str.length;i++){
    arr.push(str[i]);
     arr.push(str[i]);
   }
   return arr.join('');
 }
 