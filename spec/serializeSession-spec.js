'use babel'

import Path from 'path'
import { exec } from 'sb-exec'

const serializeOutput = require('./serializeSession')

describe('serializeSession', function() {
  it('is compatible with php when given an object', function() {
    const phpFilePath = Path.join(__dirname, 'serializeSession.php')
    waitsForPromise(function() {
      return exec('php', [phpFilePath]).then(function(givenOutput) {
        // NOTE: Patch PHP floating point madness
        const output = givenOutput.replace('1.1000000000000001', '1.1').trim().split('\n')
        const ourOutput = serializeOutput()
        for (let i = 0, length = output.length; i < length; ++i) {
          expect(output[i]).toBe(ourOutput[i])
        }
      })
    })
  })
})
