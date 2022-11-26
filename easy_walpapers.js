function wallpaper(l, w, h) {
  if(l ===0 || w ===0|| h===0){
    return 'zero'
  }
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
      let x = Math.ceil((l * h * 2 + w * h * 2) * 1.15 / 5.2)
  return numbers[x]
    }