// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  Conversation,
  ConversationData,
  ConversationPatch,
  ConversationQuery,
  ConversationService
} from './conversation.class'

export type { Conversation, ConversationData, ConversationPatch, ConversationQuery }

export type ConversationClientService = Pick<
  ConversationService<Params<ConversationQuery>>,
  (typeof conversationMethods)[number]
>

export const conversationPath = 'conversation'

export const conversationMethods: Array<keyof ConversationService> = [
  'find',
  'get',
  'create',
  'patch',
  'remove'
]

export const conversationClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(conversationPath, connection.service(conversationPath), {
    methods: conversationMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [conversationPath]: ConversationClientService
  }
}
