import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { Donvi, DonviData, DonviPatch, DonviQuery } from './donvi.schema';
export type { Donvi, DonviData, DonviPatch, DonviQuery };
export interface DonviParams extends KnexAdapterParams<DonviQuery> {
}
export declare class DonviService<ServiceParams extends Params = DonviParams> extends KnexService<Donvi, DonviData, DonviParams, DonviPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
