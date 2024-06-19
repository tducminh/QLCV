// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Donvi, DonviData, DonviPatch, DonviQuery } from './donvi.schema'

export type { Donvi, DonviData, DonviPatch, DonviQuery }

export interface DonviParams extends KnexAdapterParams<DonviQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class DonviService<ServiceParams extends Params = DonviParams> extends KnexService<
  Donvi,
  DonviData,
  DonviParams,
  DonviPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'donvi'
  }
}
