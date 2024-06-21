// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  nhomctDataValidator,
  nhomctPatchValidator,
  nhomctQueryValidator,
  nhomctResolver,
  nhomctExternalResolver,
  nhomctDataResolver,
  nhomctPatchResolver,
  nhomctQueryResolver
} from './nhomct.schema'

import type { Application } from '../../declarations'
import { NhomctService, getOptions } from './nhomct.class'
import { nhomctPath, nhomctMethods } from './nhomct.shared'

export * from './nhomct.class'
export * from './nhomct.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const nhomct = (app: Application) => {
  // Register our service on the Feathers application
  app.use(nhomctPath, new NhomctService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: nhomctMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(nhomctPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(nhomctExternalResolver),
        schemaHooks.resolveResult(nhomctResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(nhomctQueryValidator), schemaHooks.resolveQuery(nhomctQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(nhomctDataValidator), schemaHooks.resolveData(nhomctDataResolver)],
      patch: [schemaHooks.validateData(nhomctPatchValidator), schemaHooks.resolveData(nhomctPatchResolver)],
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
    [nhomctPath]: NhomctService
  }
}
