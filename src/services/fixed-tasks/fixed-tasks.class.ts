// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { FixedTasks, FixedTasksData, FixedTasksPatch, FixedTasksQuery } from './fixed-tasks.schema'

export type { FixedTasks, FixedTasksData, FixedTasksPatch, FixedTasksQuery }

export interface FixedTasksParams extends KnexAdapterParams<FixedTasksQuery> {
  user: any
}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class FixedTasksService<ServiceParams extends Params = FixedTasksParams> extends KnexService<
  FixedTasks,
  FixedTasksData,
  FixedTasksParams,
  FixedTasksPatch
> { }

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'fixed-tasks'
  }
}
