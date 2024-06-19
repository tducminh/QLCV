import type { Application } from '../../declarations';
import { DonviService } from './donvi.class';
import { donviPath } from './donvi.shared';
export * from './donvi.class';
export * from './donvi.schema';
export declare const donvi: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [donviPath]: DonviService;
    }
}
