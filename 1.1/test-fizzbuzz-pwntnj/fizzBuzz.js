function fizzBuzz(max) {
  if (max === null || max === undefined) {
    return undefined
  }
  let o = ''
  if (max > 0) {
    for (let i = 1; i <= max; i++) {
      if (i%3===0 && i%5===0) {
        o = o + 'FizzBuzz'
      } 
      else if (i % 5 === 0) {
        o = o + 'Buzz'
      }
      else if (i%3===0 ) {
        o = o + 'Fizz'
      } else {
      o = o+i
      }
    }
  }
  return o
}
module.exports = fizzBuzz
