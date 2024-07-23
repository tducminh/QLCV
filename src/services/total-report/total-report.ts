// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  totalReportDataValidator,
  totalReportPatchValidator,
  totalReportQueryValidator,
  totalReportResolver,
  totalReportExternalResolver,
  totalReportDataResolver,
  totalReportPatchResolver,
  totalReportQueryResolver
} from './total-report.schema'

import type { Application } from '../../declarations'
import { TotalReportService, getOptions } from './total-report.class'
import { totalReportPath, totalReportMethods } from './total-report.shared'

export * from './total-report.class'
export * from './total-report.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const totalReport = (app: Application) => {
  // Register our service on the Feathers application
  app.use(totalReportPath, new TotalReportService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: totalReportMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(totalReportPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(totalReportExternalResolver),
        schemaHooks.resolveResult(totalReportResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(totalReportQueryValidator),
        schemaHooks.resolveQuery(totalReportQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(totalReportDataValidator),
        schemaHooks.resolveData(totalReportDataResolver)
      ],
      patch: [
        schemaHooks.validateData(totalReportPatchValidator),
        schemaHooks.resolveData(totalReportPatchResolver)
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
    [totalReportPath]: TotalReportService
  }
}
