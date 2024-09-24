// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { ParticipantsService } from './participants.class'
import { userSchema } from '../users/users.schema'
import { conversationSchema } from '../conversation/conversation.schema'

// Main data model schema
export const participantsSchema = Type.Object(
  {
    id: Type.Number(),
    createdAt: Type.String(),
    updatedAt: Type.String(),
    type: Type.Number(),
    conversationId: Type.Number(),
    userId: Type.Number(),
    user: Type.Ref(userSchema),
    conv: Type.Ref(conversationSchema),
  },
  { $id: 'Participants', additionalProperties: false }
)
export type Participants = Static<typeof participantsSchema>
export const participantsValidator = getValidator(participantsSchema, dataValidator)
export const participantsResolver = resolve<Participants, HookContext<ParticipantsService>>({
  user: virtual(async (participants, context) => {
    // Associate the user that sent the message
    return context.app.service('users').get(participants.userId)
  }),
  conv: virtual(async (participants, context) => {
    // Associate the conversation of the message
    return context.app.service('conversation').get(participants.conversationId)
  }),
})

export const participantsExternalResolver = resolve<Participants, HookContext<ParticipantsService>>({})

// Schema for creating new entries
export const participantsDataSchema = Type.Pick(participantsSchema, ['createdAt', 'updatedAt', 'type', 'conversationId', 'userId'], {
  $id: 'ParticipantsData'
})
export type ParticipantsData = Static<typeof participantsDataSchema>
export const participantsDataValidator = getValidator(participantsDataSchema, dataValidator)
export const participantsDataResolver = resolve<Participants, HookContext<ParticipantsService>>({
  createdAt: async () => {
    return new Date().toISOString()
  },
  updatedAt: async () => {
    return new Date().toISOString()
  },
})

// Schema for updating existing entries
export const participantsPatchSchema = Type.Partial(participantsSchema, {
  $id: 'ParticipantsPatch'
})
export type ParticipantsPatch = Static<typeof participantsPatchSchema>
export const participantsPatchValidator = getValidator(participantsPatchSchema, dataValidator)
export const participantsPatchResolver = resolve<Participants, HookContext<ParticipantsService>>({})

// Schema for allowed query properties
export const participantsQueryProperties = Type.Pick(participantsSchema, ['id', 'createdAt', 'updatedAt', 'type', 'conversationId', 'userId'])
export const participantsQuerySchema = Type.Intersect(
  [
    querySyntax(participantsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ParticipantsQuery = Static<typeof participantsQuerySchema>
export const participantsQueryValidator = getValidator(participantsQuerySchema, queryValidator)
export const participantsQueryResolver = resolve<ParticipantsQuery, HookContext<ParticipantsService>>({})
