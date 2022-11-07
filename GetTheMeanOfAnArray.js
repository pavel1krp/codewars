function getAverage(marks){
  return Math.floor((marks.reduce((el,e)=> el+e))/marks.length)
}