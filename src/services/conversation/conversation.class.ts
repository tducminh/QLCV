// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type {
  Conversation,
  ConversationData,
  ConversationPatch,
  ConversationQuery
} from './conversation.schema'

export type { Conversation, ConversationData, ConversationPatch, ConversationQuery }

export interface ConversationParams extends KnexAdapterParams<ConversationQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class ConversationService<ServiceParams extends Params = ConversationParams> extends KnexService<
  Conversation,
  ConversationData,
  ConversationParams,
  ConversationPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mssqlClient'),
    name: 'conversation'
  }
}
