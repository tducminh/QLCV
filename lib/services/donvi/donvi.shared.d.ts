import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Donvi, DonviData, DonviPatch, DonviQuery, DonviService } from './donvi.class';
export type { Donvi, DonviData, DonviPatch, DonviQuery };
export type DonviClientService = Pick<DonviService<Params<DonviQuery>>, (typeof donviMethods)[number]>;
export declare const donviPath = "donvi";
export declare const donviMethods: Array<keyof DonviService>;
export declare const donviClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [donviPath]: DonviClientService;
    }
}
