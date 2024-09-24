// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { ConversationService } from './conversation.class'
import { userSchema } from '../users/users.schema'

// Main data model schema
export const conversationSchema = Type.Object(
  {
    id: Type.Number(),
    title: Type.String(),
    creatorId: Type.Number(),
    channelId: Type.Optional(Type.String()),
    createdAt: Type.String(),
    updatedAt: Type.String(),
    deletedAt: Type.Optional(Type.String()),
    user: Type.Ref(userSchema),
  },
  { $id: 'Conversation', additionalProperties: false }
)
export type Conversation = Static<typeof conversationSchema>
export const conversationValidator = getValidator(conversationSchema, dataValidator)
export const conversationResolver = resolve<Conversation, HookContext<ConversationService>>({
  user: virtual(async (conversation, context) => {
    // Associate the user that sent the message
    return context.app.service('users').get(conversation.creatorId)
  }),
})

export const conversationExternalResolver = resolve<Conversation, HookContext<ConversationService>>({})

// Schema for creating new entries
export const conversationDataSchema = Type.Pick(conversationSchema, ['title', 'creatorId', 'channelId', 'createdAt', 'updatedAt', 'deletedAt'], {
  $id: 'ConversationData'
})
export type ConversationData = Static<typeof conversationDataSchema>
export const conversationDataValidator = getValidator(conversationDataSchema, dataValidator)
export const conversationDataResolver = resolve<Conversation, HookContext<ConversationService>>({
  createdAt: async () => {
    return new Date().toISOString()
  },
  updatedAt: async () => {
    return new Date().toISOString()
  },
})

// Schema for updating existing entries
export const conversationPatchSchema = Type.Partial(conversationSchema, {
  $id: 'ConversationPatch'
})
export type ConversationPatch = Static<typeof conversationPatchSchema>
export const conversationPatchValidator = getValidator(conversationPatchSchema, dataValidator)
export const conversationPatchResolver = resolve<Conversation, HookContext<ConversationService>>({})

// Schema for allowed query properties
export const conversationQueryProperties = Type.Pick(conversationSchema, ['id', 'title', 'creatorId', 'channelId', 'createdAt', 'updatedAt', 'deletedAt'])
export const conversationQuerySchema = Type.Intersect(
  [
    querySyntax(conversationQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ConversationQuery = Static<typeof conversationQuerySchema>
export const conversationQueryValidator = getValidator(conversationQuerySchema, queryValidator)
export const conversationQueryResolver = resolve<ConversationQuery, HookContext<ConversationService>>({})
