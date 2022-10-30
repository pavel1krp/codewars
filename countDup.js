function duplicateCount(text){
  let arr = text.toLowerCase().split('').filter(function(item, pos) {
    return text.indexOf(item) == pos;
});
  return text;
}
console.log(duplicateCount("Indivisibility"))