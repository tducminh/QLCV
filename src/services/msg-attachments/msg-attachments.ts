// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  msgAttachmentsDataValidator,
  msgAttachmentsPatchValidator,
  msgAttachmentsQueryValidator,
  msgAttachmentsResolver,
  msgAttachmentsExternalResolver,
  msgAttachmentsDataResolver,
  msgAttachmentsPatchResolver,
  msgAttachmentsQueryResolver
} from './msg-attachments.schema'

import type { Application } from '../../declarations'
import { MsgAttachmentsService, getOptions } from './msg-attachments.class'
import { msgAttachmentsPath, msgAttachmentsMethods } from './msg-attachments.shared'

export * from './msg-attachments.class'
export * from './msg-attachments.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const msgAttachments = (app: Application) => {
  // Register our service on the Feathers application
  app.use(msgAttachmentsPath, new MsgAttachmentsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: msgAttachmentsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(msgAttachmentsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(msgAttachmentsExternalResolver),
        schemaHooks.resolveResult(msgAttachmentsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(msgAttachmentsQueryValidator),
        schemaHooks.resolveQuery(msgAttachmentsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(msgAttachmentsDataValidator),
        schemaHooks.resolveData(msgAttachmentsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(msgAttachmentsPatchValidator),
        schemaHooks.resolveData(msgAttachmentsPatchResolver)
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
    [msgAttachmentsPath]: MsgAttachmentsService
  }
}
