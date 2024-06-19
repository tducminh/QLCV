import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Task, TaskData, TaskPatch, TaskQuery } from './tasks.schema';
export type { Task, TaskData, TaskPatch, TaskQuery };
export interface TaskParams extends KnexAdapterParams<TaskQuery> {
    user: any;
}
export declare class TaskService<ServiceParams extends Params = TaskParams> extends KnexService<Task, TaskData, TaskParams, TaskPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
