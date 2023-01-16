function transpose(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
       const tmp = matrix[i][j];
       matrix[i][j] = matrix[j][i];
       matrix[j][i] = tmp;
    };
 }
  return matrix
}
console.log(transpose([[1,2,3],[4,5,6]]))