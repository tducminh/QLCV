import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Taskcomments, TaskcommentsData, TaskcommentsPatch, TaskcommentsQuery } from './task-comments.schema';
export type { Taskcomments, TaskcommentsData, TaskcommentsPatch, TaskcommentsQuery };
export interface TaskcommentsParams extends KnexAdapterParams<TaskcommentsQuery> {
    user: any;
}
export declare class TaskcommentsService<ServiceParams extends Params = TaskcommentsParams> extends KnexService<Taskcomments, TaskcommentsData, TaskcommentsParams, TaskcommentsPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
