// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Thongbao, ThongbaoData, ThongbaoPatch, ThongbaoQuery } from './thongbao.schema'

export type { Thongbao, ThongbaoData, ThongbaoPatch, ThongbaoQuery }

export interface ThongbaoParams extends KnexAdapterParams<ThongbaoQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ThongbaoService<ServiceParams extends Params = ThongbaoParams> extends KnexService<
  Thongbao,
  ThongbaoData,
  ThongbaoParams,
  ThongbaoPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'thongbao'
  }
}
