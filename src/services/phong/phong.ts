// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  phongDataValidator,
  phongPatchValidator,
  phongQueryValidator,
  phongResolver,
  phongExternalResolver,
  phongDataResolver,
  phongPatchResolver,
  phongQueryResolver
} from './phong.schema'

import type { Application } from '../../declarations'
import { PhongService, getOptions } from './phong.class'
import { phongPath, phongMethods } from './phong.shared'

export * from './phong.class'
export * from './phong.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const phong = (app: Application) => {
  // Register our service on the Feathers application
  app.use(phongPath, new PhongService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: phongMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(phongPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(phongExternalResolver),
        schemaHooks.resolveResult(phongResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(phongQueryValidator), schemaHooks.resolveQuery(phongQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(phongDataValidator), schemaHooks.resolveData(phongDataResolver)],
      patch: [schemaHooks.validateData(phongPatchValidator), schemaHooks.resolveData(phongPatchResolver)],
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
    [phongPath]: PhongService
  }
}
