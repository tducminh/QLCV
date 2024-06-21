// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Nhomct, NhomctData, NhomctPatch, NhomctQuery } from './nhomct.schema'

export type { Nhomct, NhomctData, NhomctPatch, NhomctQuery }

export interface NhomctParams extends KnexAdapterParams<NhomctQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class NhomctService<ServiceParams extends Params = NhomctParams> extends KnexService<
  Nhomct,
  NhomctData,
  NhomctParams,
  NhomctPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'nhomct'
  }
}
