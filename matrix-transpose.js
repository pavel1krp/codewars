function transpose(matrix) {
  const newMatrix = []
  for(let i = 0; i<matrix.length;i++){
    for(let k = 0; k<matrix[i].length; k++){
      newMatrix.push(matrix[i][k])
    }
  }
  return newMatrix
}
console.log(transpose([[1,2,3],[4,5,6]]))