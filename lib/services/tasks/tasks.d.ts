import type { Application } from '../../declarations';
import { TaskService } from './tasks.class';
import { taskPath } from './tasks.shared';
export * from './tasks.class';
export * from './tasks.schema';
export declare const task: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [taskPath]: TaskService;
    }
}
