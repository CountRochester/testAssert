/*
  a,b: Number
  return Number
*/

export default async (a, b) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(a / b)
    }, 100)
  })
  
}

function isNumber (num) {
  return typeof num === 'number'
}

export const divide = (a, b) => {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Inputs must be type of Number')
  }

  return a / b
}

