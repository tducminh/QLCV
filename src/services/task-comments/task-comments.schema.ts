// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { TaskcommentsService } from './task-comments.class'
import { userSchema } from '../users/users.schema'

// Main data model schema
export const taskcommentsSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String(),
    dateCreated: Type.Optional(Type.String({ format: 'date-time' })),
    TaskId: Type.Number(),
    UserId: Type.Number(),
    user: Type.Ref(userSchema),
    uploadId: Type.Optional(Type.Number()),
  },
  { $id: 'Taskcomments', additionalProperties: false }
)
export type Taskcomments = Static<typeof taskcommentsSchema>
export const taskcommentsValidator = getValidator(taskcommentsSchema, dataValidator)
export const taskcommentsResolver = resolve<Taskcomments, HookContext<TaskcommentsService>>({
  user: virtual(async (taskcomment, context) => {
    // Associate the user that sent the message
    return context.app.service('users').get(taskcomment.UserId)
  })
})

export const taskcommentsExternalResolver = resolve<Taskcomments, HookContext<TaskcommentsService>>({})

// Schema for creating new entries
export const taskcommentsDataSchema = Type.Pick(taskcommentsSchema, ['text', 'dateCreated', 'TaskId', 'UserId', 'uploadId'], {
  $id: 'TaskcommentsData'
})
export type TaskcommentsData = Static<typeof taskcommentsDataSchema>
export const taskcommentsDataValidator = getValidator(taskcommentsDataSchema, dataValidator)
export const taskcommentsDataResolver = resolve<Taskcomments, HookContext<TaskcommentsService>>({
  UserId: async (_value, _message, context) => {
    // Associate the record with the id of the authenticated user
    if (context.params.user) {
      return context.params.user.id
    }
  },
  dateCreated: async () => {
    return new Date().toISOString()
  }
})

// Schema for updating existing entries
export const taskcommentsPatchSchema = Type.Partial(taskcommentsSchema, {
  $id: 'TaskcommentsPatch'
})
export type TaskcommentsPatch = Static<typeof taskcommentsPatchSchema>
export const taskcommentsPatchValidator = getValidator(taskcommentsPatchSchema, dataValidator)
export const taskcommentsPatchResolver = resolve<Taskcomments, HookContext<TaskcommentsService>>({})

// Schema for allowed query properties
export const taskcommentsQueryProperties = Type.Pick(taskcommentsSchema, ['id', 'text', 'dateCreated', 'TaskId', 'UserId', 'uploadId'])
export const taskcommentsQuerySchema = Type.Intersect(
  [
    querySyntax(taskcommentsQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type TaskcommentsQuery = Static<typeof taskcommentsQuerySchema>
export const taskcommentsQueryValidator = getValidator(taskcommentsQuerySchema, queryValidator)
export const taskcommentsQueryResolver = resolve<TaskcommentsQuery, HookContext<TaskcommentsService>>({})
