import unit from './unit.js'

const _app = {
  tests: { unit },

  countTests () {
    let counter = 0
    const tests = Object.keys(_app.tests.unit)
    tests.forEach((test) => {
      const subTests = _app.tests.unit[test]
      const functionNames = Object.keys(subTests)
      counter += functionNames.length
    })
    return counter
  },

  showTestReport (limit, successes, errors) {
    console.log('')
    console.log('==================== BEGIN TEST REPORT ====================')
    console.log('')
    console.log('Total tests:', limit)
    console.log('Pass:', successes)
    console.log('Fail:', errors.length)
    console.log('')

    if (errors.length) {
      console.log('================== BEGIN ERROR DETAILS ==================')
      console.log('')

      errors.forEach((testError) => {
        console.log('\x1b[33m%s\x1b[0m', testError.functionName)
        console.log('\x1b[31m%s\x1b[0m', testError.name)
        console.dir(testError.error)
        console.log('')
      })

      console.log('')
      console.log('================== END ERROR DETAILS ==================')
    }

    console.log('')
    console.log('===================== END TEST REPORT ======================')
  },

  async runTest (test, options, functionName) {
    await (async function () {
      const testName = test.name
      const testValue = test.test
      try {
        await testValue() 
          console.log('\x1b[32m%s\x1b[0m', testName)
          options.successes++
          options.counter++
          if (options.counter === options.limit) {
            _app.showTestReport(options.limit, options.successes, options.errors)
        }
      } catch (err) {
        options.errors.push({
          name: testName,
          error: err,
          functionName
        })

        console.log('\x1b[31m%s\x1b[0m', testName)
        options.counter++
        if (options.counter === options.limit) {
          _app.showTestReport(options.limit, options.successes, options.errors)
        }
      }
    })()
  },

  async runTests () {
    const errors = []
    let successes = 0
    const limit = _app.countTests()
    let counter = 0

    const options = {
      errors,
      successes,
      limit,
      counter
    }

    const tests = Object.keys(_app.tests)
    for (const key of tests) {
      const subTests = _app.tests[key]
      const functionNames = Object.keys(subTests)
      for (const functionName of functionNames) {
        console.log('\x1b[36m%s\x1b[0m', `Running tests for function ${functionName}`)
        for (const test of subTests[functionName]) {
          await _app.runTest(test, options, functionName)
        }
      }
    }
  }
}

_app.runTests()