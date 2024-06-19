// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  taskcommentsDataValidator,
  taskcommentsPatchValidator,
  taskcommentsQueryValidator,
  taskcommentsResolver,
  taskcommentsExternalResolver,
  taskcommentsDataResolver,
  taskcommentsPatchResolver,
  taskcommentsQueryResolver
} from './task-comments.schema'

import type { Application } from '../../declarations'
import { TaskcommentsService, getOptions } from './task-comments.class'
import { taskcommentsPath, taskcommentsMethods } from './task-comments.shared'

export * from './task-comments.class'
export * from './task-comments.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const taskcomments = (app: Application) => {
  // Register our service on the Feathers application
  app.use(taskcommentsPath, new TaskcommentsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: taskcommentsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(taskcommentsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(taskcommentsExternalResolver),
        schemaHooks.resolveResult(taskcommentsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(taskcommentsQueryValidator),
        schemaHooks.resolveQuery(taskcommentsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(taskcommentsDataValidator),
        schemaHooks.resolveData(taskcommentsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(taskcommentsPatchValidator),
        schemaHooks.resolveData(taskcommentsPatchResolver)
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
    [taskcommentsPath]: TaskcommentsService
  }
}
