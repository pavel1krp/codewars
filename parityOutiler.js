function findOutlier(integers){
  let odd = integers.filter(el => el%2 ===0 ||el%2 ===(-0))
  let notodd = integers.filter(el => el%2 ===1||el%2 ===(-1))
  return odd.length ===1? odd[0]: notodd[0] 

}
console.log(findOutlier([105659206,194837016,-84946850,86175394,182978776,24542560,-57873244,-106437020,-94287294,74451582,114805468,-77199596,179620574,-10944520,-142523589,-163851200,110274038,-44561304,-80230050,-199535552,88948296,-16191158,-55983850,-197815650,185084710,144784412,11387000,-128328874,-118218202]))