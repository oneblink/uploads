import { OneBlinkNodeJsHandler } from '../../src/http-handlers/NodeJsHandler'

describe('determineQueueSize', () => {
  const oneBlinkNodeJsHandler = new OneBlinkNodeJsHandler()
  const determineQueueSize = oneBlinkNodeJsHandler.determineQueueSize

  it('should return 10 for node environments', () => {
    expect(determineQueueSize()).toBe(10)
  })
})
