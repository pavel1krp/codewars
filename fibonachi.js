function nthFibo(n) {
  if (n == 1 ){
    return 0
  }
  if(n == 2){
    return 1
  }
  let n1 = 0, n2 = 1, c=n;
    for (let i = 3; i <=n; i++){
     c = n1 + n2;
     n1 = n2;
     n2 = c;
    }
    return c;
  }