const number = function(busStops){
  let sum = 0
  for(let i = 0; i< busStops.length; i++){
    sum += busStops[i][0]
    sum -= busStops[i][1]
  }
  return sum
}
console.log(number([[10,0],[3,5],[5,8]]))

const numberMore = (busStops)=>{
  return busStops.reduce((el,[x,y]) => el+x-y,0)
}
console.log(numberMore([[10,0],[3,5],[5,8]]))