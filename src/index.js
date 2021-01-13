import { default as badDivide, divide } from './lib.js'

const a = 5
const b = 20

async function run () {
  const result = await badDivide(5, 20)
  console.log(`${a} / ${b} = ${result}`)
  console.log(`${b} / ${a} = ${divide(b, a)}`)
}

run()
