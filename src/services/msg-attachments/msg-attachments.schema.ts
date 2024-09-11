// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { MsgAttachmentsService } from './msg-attachments.class'

// Main data model schema
export const msgAttachmentsSchema = Type.Object(
  {
    id: Type.Number(),
    msgId: Type.Number(),
    uploadId: Type.Number(),
    createdAt: Type.String(),
    updatedAt: Type.String(),
  },
  { $id: 'MsgAttachments', additionalProperties: false }
)
export type MsgAttachments = Static<typeof msgAttachmentsSchema>
export const msgAttachmentsValidator = getValidator(msgAttachmentsSchema, dataValidator)
export const msgAttachmentsResolver = resolve<MsgAttachments, HookContext<MsgAttachmentsService>>({})

export const msgAttachmentsExternalResolver = resolve<MsgAttachments, HookContext<MsgAttachmentsService>>({})

// Schema for creating new entries
export const msgAttachmentsDataSchema = Type.Pick(msgAttachmentsSchema, ['msgId', 'uploadId', 'createdAt', 'updatedAt'], {
  $id: 'MsgAttachmentsData'
})
export type MsgAttachmentsData = Static<typeof msgAttachmentsDataSchema>
export const msgAttachmentsDataValidator = getValidator(msgAttachmentsDataSchema, dataValidator)
export const msgAttachmentsDataResolver = resolve<MsgAttachments, HookContext<MsgAttachmentsService>>({})

// Schema for updating existing entries
export const msgAttachmentsPatchSchema = Type.Partial(msgAttachmentsSchema, {
  $id: 'MsgAttachmentsPatch'
})
export type MsgAttachmentsPatch = Static<typeof msgAttachmentsPatchSchema>
export const msgAttachmentsPatchValidator = getValidator(msgAttachmentsPatchSchema, dataValidator)
export const msgAttachmentsPatchResolver = resolve<MsgAttachments, HookContext<MsgAttachmentsService>>({})

// Schema for allowed query properties
export const msgAttachmentsQueryProperties = Type.Pick(msgAttachmentsSchema, ['id', 'msgId', 'uploadId', 'createdAt', 'updatedAt'])
export const msgAttachmentsQuerySchema = Type.Intersect(
  [
    querySyntax(msgAttachmentsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type MsgAttachmentsQuery = Static<typeof msgAttachmentsQuerySchema>
export const msgAttachmentsQueryValidator = getValidator(msgAttachmentsQuerySchema, queryValidator)
export const msgAttachmentsQueryResolver = resolve<MsgAttachmentsQuery, HookContext<MsgAttachmentsService>>(
  {}
)
