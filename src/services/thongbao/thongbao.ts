// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  thongbaoDataValidator,
  thongbaoPatchValidator,
  thongbaoQueryValidator,
  thongbaoResolver,
  thongbaoExternalResolver,
  thongbaoDataResolver,
  thongbaoPatchResolver,
  thongbaoQueryResolver
} from './thongbao.schema'

import type { Application } from '../../declarations'
import { ThongbaoService, getOptions } from './thongbao.class'
import { thongbaoPath, thongbaoMethods } from './thongbao.shared'

export * from './thongbao.class'
export * from './thongbao.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const thongbao = (app: Application) => {
  // Register our service on the Feathers application
  app.use(thongbaoPath, new ThongbaoService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: thongbaoMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(thongbaoPath).hooks({
    around: {
      all: [

        schemaHooks.resolveExternal(thongbaoExternalResolver),
        schemaHooks.resolveResult(thongbaoResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(thongbaoQueryValidator),
        schemaHooks.resolveQuery(thongbaoQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        authenticate('jwt'),
        schemaHooks.validateData(thongbaoDataValidator),
        schemaHooks.resolveData(thongbaoDataResolver)
      ],
      patch: [
        authenticate('jwt'),
        schemaHooks.validateData(thongbaoPatchValidator),
        schemaHooks.resolveData(thongbaoPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [thongbaoPath]: ThongbaoService
  }
}
