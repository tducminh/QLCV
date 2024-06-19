import type { TransportConnection, Application } from '@feathersjs/feathers';
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
import './services/task-comments/task-comments.shared';
export type { Taskcomments, TaskcommentsData, TaskcommentsQuery, TaskcommentsPatch } from './services/task-comments/task-comments.shared';
import './services/tasks/tasks.shared';
export type { Task, TaskData, TaskQuery, TaskPatch } from './services/tasks/tasks.shared';
import './services/phong/phong.shared';
export type { Phong, PhongData, PhongQuery, PhongPatch } from './services/phong/phong.shared';
import './services/donvi/donvi.shared';
export type { Donvi, DonviData, DonviQuery, DonviPatch } from './services/donvi/donvi.shared';
import './services/users/users.shared';
export type { User, UserData, UserQuery, UserPatch } from './services/users/users.shared';
export interface Configuration {
    connection: TransportConnection<ServiceTypes>;
}
export interface ServiceTypes {
}
export type ClientApplication = Application<ServiceTypes, Configuration>;
/**
 * Returns a typed client for the qlcv app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => ClientApplication;
