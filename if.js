function _if(bool, func1, func2) {
  console.log(bool)
  if( bool == true){
   return func1()
  }else{
    return func2()
  }
}