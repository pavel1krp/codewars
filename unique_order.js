var uniqueInOrderWrong=function(iterable){
  if(typeof iterable === 'string'){
  iterable = iterable.split('')
}
for(let i = 0; i<iterable.length; i++){
  if(iterable[i]===iterable[i+1]){
     iterable.splice(i, 1,'qwertasdf')
  }
}
return iterable.filter(el=> el!= 'qwertasdf')
}
const uniqueInOrder=function(iterable){
  let sumArr = []
  if(typeof iterable === 'string'){
    iterable = iterable.split('')
  }
  for(let i = 0; i<iterable.length; i++){
    if(iterable[i]!==iterable[i+1]){
       sumArr.push(iterable[i])
    }
  }
  return sumArr
}