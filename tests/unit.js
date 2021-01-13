import { strict as assert } from 'assert'
import { default as badDivide, divide } from '../src/lib.js'

export default {
  badDivide: [
    {
      name: 'Function should return right result of division of two numbers',
      async test () {
        const testArg1Pos = 5
        const testArg2Pos = 2
        const testResultPos = await badDivide(testArg1Pos, testArg2Pos)
        const expectedPos = testArg1Pos / testArg2Pos

        const testArg1Neg = -5
        const testArg2Neg = -2
        const testResultNeg = await badDivide(testArg1Neg, testArg2Neg)
        const expectedNeg = testArg1Neg / testArg2Neg

        const testArg1Zero = -5
        const testArg2Zero =  0
        const testResultZero = await badDivide(testArg1Zero, testArg2Zero)
        const expectedZero = - Infinity

        const errorPos = new assert.AssertionError({
          message: 'Function should return result of division of two positive numbers',
          actual: testResultPos,
          expected: expectedPos
        })
        const errorNeg = new assert.AssertionError({
          message: 'Function should return result of division of two negative numbers',
          actual: testResultNeg,
          expected: expectedNeg
        })
        const errorZero = new assert.AssertionError({
          message: 'Function should return - Infinity as result of division of numbers and zero',
          actual: testResultZero,
          expected: expectedZero
        })

        assert.strictEqual(testResultPos, expectedPos, errorPos)
        assert.strictEqual(testResultNeg, expectedNeg, errorNeg)
        assert.strictEqual(testResultZero, expectedZero, errorZero)
      }
    },

    {
      name: 'Function should return number',
      async test () {
        const testArg1 = '5'
        const testArg2 = 2
        const divisionRes = await badDivide(testArg1, testArg2)
        const type = typeof divisionRes 
        const testResult = type === 'number'
        const expected = true

        const error = new assert.AssertionError({
          message: 'Function should return number as result',
          actual: type,
          expected
        })

        assert.strictEqual(testResult, expected, error)
      }
    },

    {
      name: 'Test for sending incorrect value',
      async test () {
        const testArrayEmpty = []
        const testNumber = 0
        const testString = 'sss'
        const testNull = null
        const testObject = { length: 5 }
        const testBadArray = ['5', 'dd', {}, null]

        const divisionRes1 = await badDivide(testArrayEmpty, testNumber)
        const divisionRes2 = await badDivide(testString, testNull)
        const divisionRes3 = await badDivide(testObject, testBadArray)
        const divisionRes4 = await badDivide(testNumber, testNull)
        const divisionRes5 = await badDivide()

        const result1 = Number.isNaN(divisionRes1) === true
        const result2 = Number.isNaN(divisionRes2) === true
        const result3 = Number.isNaN(divisionRes3) === true
        const result4 = Number.isNaN(divisionRes4) === true
        const result5 = Number.isNaN(divisionRes5) === true
        
        const expected = true

        const error1 = new assert.AssertionError({
          message: 'Function should return NaN if input incorrect type value',
          actual: divisionRes1,
          expected
        })

        const error2 = new assert.AssertionError({
          message: 'Function should return NaN if input incorrect type value',
          actual: divisionRes2,
          expected
        })

        const error3 = new assert.AssertionError({
          message: 'Function should return NaN if input incorrect type value',
          actual: divisionRes3,
          expected
        })

        const error4 = new assert.AssertionError({
          message: 'Function should return NaN if input incorrect type value',
          actual: divisionRes4,
          expected
        })

        const error5 = new assert.AssertionError({
          message: 'Function should return NaN if input is empty',
          actual: divisionRes5,
          expected
        })

        assert.strictEqual(result1, expected, error1)
        assert.strictEqual(result2, expected, error2)
        assert.strictEqual(result3, expected, error3)
        assert.strictEqual(result4, expected, error4)
        assert.strictEqual(result5, expected, error5)
      }
    },

    {
      name: 'Function should throw if invalid inputs',
      test () {
        const testArg1 = '5'
        const testArg2 = 2
        const testFun = async () => {
          await badDivide(testArg1, testArg2)
        }
        const expected = { name: 'Error'}
        const error = new assert.AssertionError({
          message: 'Function should throw if inputs is not a number',
          expected
        })
        error.functionName = 'badDivide'
        assert.throws(testFun, expected, error)
      }
    }
  ],
  divide: [
    {
      name: 'Function should return right result of division of two numbers',
      test () {
        const testArg1Pos = 5
        const testArg2Pos = 2
        const testResultPos = divide(testArg1Pos, testArg2Pos)
        const expectedPos = testArg1Pos / testArg2Pos

        const testArg1Neg = -5
        const testArg2Neg = -2
        const testResultNeg = divide(testArg1Neg, testArg2Neg)
        const expectedNeg = testArg1Neg / testArg2Neg

        const testArg1Zero = -5
        const testArg2Zero =  0
        const testResultZero = divide(testArg1Zero, testArg2Zero)
        const expectedZero = - Infinity

        const errorPos = new assert.AssertionError({
          message: 'Function should return result of division of two positive numbers',
          actual: testResultPos,
          expected: expectedPos
        })
        const errorNeg = new assert.AssertionError({
          message: 'Function should return result of division of two negative numbers',
          actual: testResultNeg,
          expected: expectedNeg
        })
        const errorZero = new assert.AssertionError({
          message: 'Function should return - Infinity as result of division of numbers and zero',
          actual: testResultZero,
          expected: expectedZero
        })

        assert.strictEqual(testResultPos, expectedPos, errorPos)
        assert.strictEqual(testResultNeg, expectedNeg, errorNeg)
        assert.strictEqual(testResultZero, expectedZero, errorZero)
      }
    },

    {
      name: 'Function should throw if invalid inputs',
      test () {
        const testArg1 = '5'
        const testArg2 = 2
        const testFun = () => {
          divide(testArg1, testArg2)
        }
        assert.throws(testFun, { name: 'Error'}, 'Function should throw if inputs is not a number')
      }
    }
  ]
}