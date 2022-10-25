function geometricSequenceElements(a, r, n){
  let answ = '';
  let count= a;
  for( let i = 0; i<n; i++){
    answ += String(count)+ ', '
    count *= r;
  }
  answ = answ.split('');
  answ.length = answ.length-2
  return answ.join('')
}
console.log(geometricSequenceElements(2,3,5))