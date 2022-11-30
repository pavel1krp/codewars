function isPythagoreanTriple(integers) {
  if(Math.pow(integers[0],2) + Math.pow(integers[1],2) === Math.pow(integers[2],2) || Math.pow(integers[1],2) + Math.pow(integers[2],2) === Math.pow(integers[0],2) || Math.pow(integers[2],2) + Math.pow(integers[0],2) === Math.pow(integers[1],2) ){
      return true
    } return false
  }