import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Phong, PhongData, PhongPatch, PhongQuery } from './phong.schema';
export type { Phong, PhongData, PhongPatch, PhongQuery };
export interface PhongParams extends KnexAdapterParams<PhongQuery> {
}
export declare class PhongService<ServiceParams extends Params = PhongParams> extends KnexService<Phong, PhongData, PhongParams, PhongPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
