import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Phong, PhongData, PhongPatch, PhongQuery, PhongService } from './phong.class';
export type { Phong, PhongData, PhongPatch, PhongQuery };
export type PhongClientService = Pick<PhongService<Params<PhongQuery>>, (typeof phongMethods)[number]>;
export declare const phongPath = "phong";
export declare const phongMethods: Array<keyof PhongService>;
export declare const phongClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [phongPath]: PhongClientService;
    }
}
