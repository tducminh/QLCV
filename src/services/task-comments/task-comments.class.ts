// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  Taskcomments,
  TaskcommentsData,
  TaskcommentsPatch,
  TaskcommentsQuery
} from './task-comments.schema'

export type { Taskcomments, TaskcommentsData, TaskcommentsPatch, TaskcommentsQuery }

export interface TaskcommentsParams extends KnexAdapterParams<TaskcommentsQuery> {
  user: any
}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class TaskcommentsService<ServiceParams extends Params = TaskcommentsParams> extends KnexService<
  Taskcomments,
  TaskcommentsData,
  TaskcommentsParams,
  TaskcommentsPatch
> { }

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'task-comments'
  }
}
