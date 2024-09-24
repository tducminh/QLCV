// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  conversationDataValidator,
  conversationPatchValidator,
  conversationQueryValidator,
  conversationResolver,
  conversationExternalResolver,
  conversationDataResolver,
  conversationPatchResolver,
  conversationQueryResolver
} from './conversation.schema'

import type { Application } from '../../declarations'
import { ConversationService, getOptions } from './conversation.class'
import { conversationPath, conversationMethods } from './conversation.shared'

export * from './conversation.class'
export * from './conversation.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const conversation = (app: Application) => {
  // Register our service on the Feathers application
  app.use(conversationPath, new ConversationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: conversationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(conversationPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(conversationExternalResolver),
        schemaHooks.resolveResult(conversationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(conversationQueryValidator),
        schemaHooks.resolveQuery(conversationQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(conversationDataValidator),
        schemaHooks.resolveData(conversationDataResolver)
      ],
      patch: [
        schemaHooks.validateData(conversationPatchValidator),
        schemaHooks.resolveData(conversationPatchResolver)
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
    [conversationPath]: ConversationService
  }
}
