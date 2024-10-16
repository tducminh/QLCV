// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'

describe('fixed-tasks service', () => {
  it('registered the service', () => {
    const service = app.service('fixed-tasks')

    assert.ok(service, 'Registered the service')
  })
})
