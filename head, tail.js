function head (array){
  return array[0];
}
console.log(head([5,1]))
console.log(tail([1,2,3,4]))
function last(array){
  const arr = array.pop();
  return arr;
}
function tail(array){
  const arr = array.slice(1);
  return arr;
}
console.log(last([4,44,12,3]))
function init(array){
  array.splice(-1);
  return array;
}