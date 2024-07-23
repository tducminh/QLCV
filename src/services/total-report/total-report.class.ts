// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { TotalReport, TotalReportData, TotalReportPatch, TotalReportQuery } from './total-report.schema'

export type { TotalReport, TotalReportData, TotalReportPatch, TotalReportQuery }

export interface TotalReportParams extends KnexAdapterParams<TotalReportQuery> {
  user: any
}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class TotalReportService<ServiceParams extends Params = TotalReportParams> extends KnexService<
  TotalReport,
  TotalReportData,
  TotalReportParams,
  TotalReportPatch
> { }

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'total-report'
  }
}
