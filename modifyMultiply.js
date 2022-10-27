function modifyMultiply (str,loc,num) {
  let string = '';
  str = str.split(' ');
  for (let i = 0; i< num-1; i++){
    string += str[loc] + "-"
  }
  return string + str[loc]
  } 
  console.log(modifyMultiply("This is a string",3 ,5))