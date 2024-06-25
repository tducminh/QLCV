// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  donviDataValidator,
  donviPatchValidator,
  donviQueryValidator,
  donviResolver,
  donviExternalResolver,
  donviDataResolver,
  donviPatchResolver,
  donviQueryResolver
} from './donvi.schema'

import type { Application } from '../../declarations'
import { DonviService, getOptions } from './donvi.class'
import { donviPath, donviMethods } from './donvi.shared'

export * from './donvi.class'
export * from './donvi.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const donvi = (app: Application) => {
  // Register our service on the Feathers application
  app.use(donviPath, new DonviService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: donviMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(donviPath).hooks({
    around: {
      all: [

        schemaHooks.resolveExternal(donviExternalResolver),
        schemaHooks.resolveResult(donviResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(donviQueryValidator), schemaHooks.resolveQuery(donviQueryResolver)],
      find: [],
      get: [],
      create: [authenticate('jwt'), schemaHooks.validateData(donviDataValidator), schemaHooks.resolveData(donviDataResolver)],
      patch: [authenticate('jwt'), schemaHooks.validateData(donviPatchValidator), schemaHooks.resolveData(donviPatchResolver)],
      remove: [authenticate('jwt'),]
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
    [donviPath]: DonviService
  }
}
