// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Report, ReportData, ReportPatch, ReportQuery, ReportService } from './report.class'

export type { Report, ReportData, ReportPatch, ReportQuery }

export type ReportClientService = Pick<ReportService<Params<ReportQuery>>, (typeof reportMethods)[number]>

export const reportPath = 'report'

export const reportMethods: Array<keyof ReportService> = ['find', 'findByPhong', 'findTop10UserPhong', 'findTG', 'findByPhongTG', 'findTop10UserPhongTG', 'ketxuatTG', 'ketxuatPHONG']

export const reportClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(reportPath, connection.service(reportPath), {
    methods: reportMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [reportPath]: ReportClientService
  }
}
