function hasUniqueChars(str){
  let arr = str.split('');
  let sort = arr.filter((item,pos)=> arr.indexOf(item) == pos)
  if(arr.length === sort.length){
    return true
  } return false
}