function spoonerize(words) {
  words = words.split(' ').map(el => el.split(''));
  let x = words[0][0];
  let y = words[1][0];
  words[0].shift();
  words[0].unshift(y);
  words[1].shift();
  words[1].unshift(x);
  words[0].join();
  words[1].join();
  words = words.join(' ').replace(/[,]/g, '')
  return words
}
spoonerize("nit picking")