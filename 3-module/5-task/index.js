const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let numbers = str.split(' ').filter( num => !isNaN(num) ).map( num => Number(num) )
  // console.log(numbers)
  let min = Math.min(...numbers)
  // console.log(min)

  let max = Math.max(...numbers)
  console.log(max)
  return { min,max}
}

getMinMax(inputData)
