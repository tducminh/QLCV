import type { Application } from '../../declarations';
import { PhongService } from './phong.class';
import { phongPath } from './phong.shared';
export * from './phong.class';
export * from './phong.schema';
export declare const phong: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [phongPath]: PhongService;
    }
}
