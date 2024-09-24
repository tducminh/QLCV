// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  MsgAttachments,
  MsgAttachmentsData,
  MsgAttachmentsPatch,
  MsgAttachmentsQuery
} from './msg-attachments.schema'

export type { MsgAttachments, MsgAttachmentsData, MsgAttachmentsPatch, MsgAttachmentsQuery }

export interface MsgAttachmentsParams extends KnexAdapterParams<MsgAttachmentsQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class MsgAttachmentsService<ServiceParams extends Params = MsgAttachmentsParams> extends KnexService<
  MsgAttachments,
  MsgAttachmentsData,
  MsgAttachmentsParams,
  MsgAttachmentsPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'msg-attachments'
  }
}
