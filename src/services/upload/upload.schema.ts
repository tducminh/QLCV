// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { UploadService } from './upload.class'
import { user } from '../users/users'

// Main data model schema
export const uploadSchema = Type.Object(
  {
    id: Type.Number(),
    filename: Type.String(),
    fileType: Type.String(),
    url: Type.String(),
    content: Type.Optional(Type.String()),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    userId: Type.Number(),
    taskId: Type.Optional(Type.Number()),
    size: Type.Optional(Type.Number()),
  },
  { $id: 'Upload', additionalProperties: false }
)
export type Upload = Static<typeof uploadSchema>
export const uploadValidator = getValidator(uploadSchema, dataValidator)
export const uploadResolver = resolve<Upload, HookContext<UploadService>>({})

export const uploadExternalResolver = resolve<Upload, HookContext<UploadService>>({})

// Schema for creating new entries
export const uploadDataSchema = Type.Pick(uploadSchema, ['filename', 'fileType', 'url', 'content', 'userId', 'taskId', 'createdAt', 'size'], {
  $id: 'UploadData'
})
export type UploadData = Static<typeof uploadDataSchema>
export const uploadDataValidator = getValidator(uploadDataSchema, dataValidator)
export const uploadDataResolver = resolve<Upload, HookContext<UploadService>>({})

// Schema for updating existing entries
export const uploadPatchSchema = Type.Partial(uploadSchema, {
  $id: 'UploadPatch'
})
export type UploadPatch = Static<typeof uploadPatchSchema>
export const uploadPatchValidator = getValidator(uploadPatchSchema, dataValidator)
export const uploadPatchResolver = resolve<Upload, HookContext<UploadService>>({})

// Schema for allowed query properties
export const uploadQueryProperties = Type.Pick(uploadSchema, ['id', 'filename', 'fileType', 'url', 'content', 'createdAt', 'userId', 'taskId', 'size'])
export const uploadQuerySchema = Type.Intersect(
  [
    querySyntax(uploadQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type UploadQuery = Static<typeof uploadQuerySchema>
export const uploadQueryValidator = getValidator(uploadQuerySchema, queryValidator)
export const uploadQueryResolver = resolve<UploadQuery, HookContext<UploadService>>({})
