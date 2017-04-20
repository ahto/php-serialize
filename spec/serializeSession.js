'use babel'

import { serializeSession } from '../'

module.exports = function () {
  const items = []

  function debugSession(item: string) {
    items.push(serializeSession(item))
  }

  debugSession(
    {
      a_number: 42,
      a_string: 'fourtytwo',
      user_data: { uid: 666 },
    },
  )

  return items
}
