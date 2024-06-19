import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Taskcomments, TaskcommentsData, TaskcommentsPatch, TaskcommentsQuery, TaskcommentsService } from './task-comments.class';
export type { Taskcomments, TaskcommentsData, TaskcommentsPatch, TaskcommentsQuery };
export type TaskcommentsClientService = Pick<TaskcommentsService<Params<TaskcommentsQuery>>, (typeof taskcommentsMethods)[number]>;
export declare const taskcommentsPath = "task-comments";
export declare const taskcommentsMethods: Array<keyof TaskcommentsService>;
export declare const taskcommentsClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [taskcommentsPath]: TaskcommentsClientService;
    }
}
