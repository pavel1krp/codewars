function solution(str){
  let arr = []
   for(let i=0; i<str.length; i++){
      arr.push(str[i])
   }
   for(let i = 0; i<arr.length-1; i++){
    if(i%2===0){
    arr[i] = arr[i]+ arr[i+1]}
    arr[i]= arr[i]
   }
   if(str.length%2 === 0){
    return arr.filter(el=> el.length>1)
   } else arr[arr.length-1] += '_'
   return  arr.filter(el=> el.length>1)
}
console.log(solution('abc'))