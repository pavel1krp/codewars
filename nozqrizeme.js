  function noonerize(numbers) {
    if(numbers[0]/1 !=numbers[0]  ||numbers[1]/1 !== numbers[1]){
      return "invalid array"
    }
    numbers = numbers.map(el => String(el).split(''));
    let x = numbers[0][0];
    let y = numbers[1][0];
    numbers[0].shift();
    numbers[0].unshift(y);
    numbers[1].shift();
    numbers[1].unshift(x);
    numbers[0].join();
    numbers[1].join();
    numbers = numbers.map(el => Number(el.join('')))
    return Math.abs(numbers[0]-numbers[1])
  } 
console.log(noonerize([22,11]))