// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  fixedTasksDataValidator,
  fixedTasksPatchValidator,
  fixedTasksQueryValidator,
  fixedTasksResolver,
  fixedTasksExternalResolver,
  fixedTasksDataResolver,
  fixedTasksPatchResolver,
  fixedTasksQueryResolver
} from './fixed-tasks.schema'

import type { Application } from '../../declarations'
import { FixedTasksService, getOptions } from './fixed-tasks.class'
import { fixedTasksPath, fixedTasksMethods } from './fixed-tasks.shared'

export * from './fixed-tasks.class'
export * from './fixed-tasks.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const fixedTasks = (app: Application) => {
  // Register our service on the Feathers application
  app.use(fixedTasksPath, new FixedTasksService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: fixedTasksMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(fixedTasksPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(fixedTasksExternalResolver),
        schemaHooks.resolveResult(fixedTasksResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(fixedTasksQueryValidator),
        schemaHooks.resolveQuery(fixedTasksQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(fixedTasksDataValidator),
        schemaHooks.resolveData(fixedTasksDataResolver)
      ],
      patch: [
        schemaHooks.validateData(fixedTasksPatchValidator),
        schemaHooks.resolveData(fixedTasksPatchResolver)
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
    [fixedTasksPath]: FixedTasksService
  }
}
