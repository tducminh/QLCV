// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { MessagesService } from './messages.class'
import { userSchema } from '../users/users.schema'
import { conversationSchema } from '../conversation/conversation.schema'

// Main data model schema
export const messagesSchema = Type.Object(
  {
    id: Type.Number(),
    conversationId: Type.Number(),
    senderId: Type.Number(),
    guid: Type.String(),
    msgType: Type.String(),
    text: Type.String(),
    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),
    uploadId: Type.Optional(Type.Number()),
    user: Type.Ref(userSchema),
    conv: Type.Ref(conversationSchema),
  },
  { $id: 'Messages', additionalProperties: false }
)
export type Messages = Static<typeof messagesSchema>
export const messagesValidator = getValidator(messagesSchema, dataValidator)
export const messagesResolver = resolve<Messages, HookContext<MessagesService>>({
  user: virtual(async (messages, context) => {
    // Associate the user that sent the message
    return context.app.service('users').get(messages.senderId)
  }),
  conv: virtual(async (messages, context) => {
    // Associate the conversation of the message
    return context.app.service('conversation').get(messages.conversationId)
  }),
})

export const messagesExternalResolver = resolve<Messages, HookContext<MessagesService>>({})

// Schema for creating new entries
export const messagesDataSchema = Type.Pick(messagesSchema, ['conversationId', 'senderId', 'guid', 'msgType', 'text', 'createdAt', 'updatedAt', 'deletedAt', 'uploadId'], {
  $id: 'MessagesData'
})
export type MessagesData = Static<typeof messagesDataSchema>
export const messagesDataValidator = getValidator(messagesDataSchema, dataValidator)
export const messagesDataResolver = resolve<Messages, HookContext<MessagesService>>({
  // userId: async (_value, _task, context) => {
  //   // Associate the record with the id of the authenticated user
  //   if (context.params.user) {
  //     return context.params.user.id
  //   }
  // },
  createdAt: async () => {
    return new Date().toISOString()
  },
  updatedAt: async () => {
    return new Date().toISOString()
  },
})

// Schema for updating existing entries
export const messagesPatchSchema = Type.Partial(messagesSchema, {
  $id: 'MessagesPatch'
})
export type MessagesPatch = Static<typeof messagesPatchSchema>
export const messagesPatchValidator = getValidator(messagesPatchSchema, dataValidator)
export const messagesPatchResolver = resolve<Messages, HookContext<MessagesService>>({})

// Schema for allowed query properties
export const messagesQueryProperties = Type.Pick(messagesSchema, ['id', 'conversationId', 'senderId', 'guid', 'msgType', 'text', 'createdAt', 'updatedAt', 'deletedAt', 'uploadId'])
export const messagesQuerySchema = Type.Intersect(
  [
    querySyntax(messagesQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type MessagesQuery = Static<typeof messagesQuerySchema>
export const messagesQueryValidator = getValidator(messagesQuerySchema, queryValidator)
export const messagesQueryResolver = resolve<MessagesQuery, HookContext<MessagesService>>({})
