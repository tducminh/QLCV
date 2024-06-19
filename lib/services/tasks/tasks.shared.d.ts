import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Task, TaskData, TaskPatch, TaskQuery, TaskService } from './tasks.class';
export type { Task, TaskData, TaskPatch, TaskQuery };
export type TaskClientService = Pick<TaskService<Params<TaskQuery>>, (typeof taskMethods)[number]>;
export declare const taskPath = "tasks";
export declare const taskMethods: Array<keyof TaskService>;
export declare const taskClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [taskPath]: TaskClientService;
    }
}
