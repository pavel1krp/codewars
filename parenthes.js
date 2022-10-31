function validParentheses(parens) {
  let sum = 0;
   parens =parens.split('')
   let left = parens.filter(el => el==='(');
   let right = parens.filter(el => el===')');
   console.log(left)
   console.log(right)
   if(parens[0]=== ')'){
     return false;
   }
   if(parens.length ===0){
     return true
   }
    for(let i=0; i<parens.length; i++){
     if(parens[i] === '('){
       sum++;
     }if(parens[i] === ')') {sum--}
     if(sum<0){
       return false}
   }
  if(left.length === right.length){
   return true
  } return false
 }