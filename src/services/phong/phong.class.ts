// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Phong, PhongData, PhongPatch, PhongQuery } from './phong.schema'

export type { Phong, PhongData, PhongPatch, PhongQuery }

export interface PhongParams extends KnexAdapterParams<PhongQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class PhongService<ServiceParams extends Params = PhongParams> extends KnexService<
  Phong,
  PhongData,
  PhongParams,
  PhongPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'phong'
  }
}
