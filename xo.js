function XO(str) {
  arr= str.toUpperCase().split('');
  arr1 = arr.filter(el => el ==='O')
  arr2 = arr.filter(el => el ==='X')
  if(arr1.length === arr2.length){
    return true
  }
   return false;
}
console.log(XO("xxOo"))