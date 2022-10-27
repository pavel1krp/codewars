function findShort(s){
  let arr = s.split(' ').map(el => el = el.length)
  return arr.sort((a,b)=> a-b)[0]
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'))