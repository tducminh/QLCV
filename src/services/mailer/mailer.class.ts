// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Mailer, MailerData, MailerPatch, MailerQuery } from './mailer.schema'

export type { Mailer, MailerData, MailerPatch, MailerQuery }

export interface MailerParams extends KnexAdapterParams<MailerQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class MailerService<ServiceParams extends Params = MailerParams> extends KnexService<
  Mailer,
  MailerData,
  MailerParams,
  MailerPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'mailer'
  }
}
