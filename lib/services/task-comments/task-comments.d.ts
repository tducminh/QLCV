import type { Application } from '../../declarations';
import { TaskcommentsService } from './task-comments.class';
import { taskcommentsPath } from './task-comments.shared';
export * from './task-comments.class';
export * from './task-comments.schema';
export declare const taskcomments: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [taskcommentsPath]: TaskcommentsService;
    }
}
