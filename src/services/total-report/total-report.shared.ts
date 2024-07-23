// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  TotalReport,
  TotalReportData,
  TotalReportPatch,
  TotalReportQuery,
  TotalReportService
} from './total-report.class'

export type { TotalReport, TotalReportData, TotalReportPatch, TotalReportQuery }

export type TotalReportClientService = Pick<
  TotalReportService<Params<TotalReportQuery>>,
  (typeof totalReportMethods)[number]
>

export const totalReportPath = 'total-report'

export const totalReportMethods: Array<keyof TotalReportService> = [
  'find',
  'get',
  'create',
  'patch',
  'remove'
]

export const totalReportClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(totalReportPath, connection.service(totalReportPath), {
    methods: totalReportMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [totalReportPath]: TotalReportClientService
  }
}
