// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { FixedTasksService } from './fixed-tasks.class'
import { userSchema } from '../users/users.schema'
import { donviSchema } from '../donvi/donvi.schema'
import { phongSchema } from '../phong/phong.schema'

// Main data model schema
export const fixedTasksSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String(),
    description: Type.Optional(Type.String()),
    userId: Type.Number(),
    userCreated: Type.Optional(Type.String()),
    user: Type.Ref(userSchema),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    point: Type.Optional(Type.Number()),
    donviId: Type.Optional(Type.Number()),
    donvi: Type.Ref(donviSchema),
    phongId: Type.Optional(Type.Number()),
    phong: Type.Ref(phongSchema),
  },
  { $id: 'FixedTasks', additionalProperties: false }
)
export type FixedTasks = Static<typeof fixedTasksSchema>
export const fixedTasksValidator = getValidator(fixedTasksSchema, dataValidator)
export const fixedTasksResolver = resolve<FixedTasks, HookContext<FixedTasksService>>({
  user: virtual(async (fixed_task, context) => {
    // Associate the user that sent the task
    return context.app.service('users').get(fixed_task.userId)
  }),
  donvi: virtual(async (fixed_task, context) => {
    if (fixed_task.donviId) {
      var d = await context.app.service('donvi').get(fixed_task.donviId)
      if (d) {
        return d;
      }
    }

  }),
  phong: virtual(async (fixed_task, context) => {
    if (fixed_task.phongId) {
      var p = await context.app.service('phong').get(fixed_task.phongId)
      if (p) {
        return p;
      }
    }
  }),
})

export const fixedTasksExternalResolver = resolve<FixedTasks, HookContext<FixedTasksService>>({})

// Schema for creating new entries
export const fixedTasksDataSchema = Type.Pick(fixedTasksSchema, ['text', 'description', 'point', 'userId', 'donviId', 'phongId'], {
  $id: 'FixedTasksData'
})
export type FixedTasksData = Static<typeof fixedTasksDataSchema>
export const fixedTasksDataValidator = getValidator(fixedTasksDataSchema, dataValidator)
export const fixedTasksDataResolver = resolve<FixedTasks, HookContext<FixedTasksService>>({
  userId: async (_value, _fixed_task, context) => {
    // Associate the record with the id of the authenticated user
    if (context.params.user) {
      return context.params.user.id
    }
  },
  donviId: async (_value, _fixed_task, context) => {
    // Associate the record with the id of the authenticated user
    if (context.params.user) {
      return context.params.user.DonviId
    }
  },
  phongId: async (_value, _fixed_task, context) => {
    // Associate the record with the id of the authenticated user
    if (context.params.user) {
      return context.params.user.PhongId
    }
  },
  createdAt: async () => {
    return new Date().toISOString()
  },
  userCreated: async (_value, _fixed_task, context) => {
    if (context.params.user) {
      return context.params.user.Ma
    }
  },
})

// Schema for updating existing entries
export const fixedTasksPatchSchema = Type.Partial(fixedTasksSchema, {
  $id: 'FixedTasksPatch'
})
export type FixedTasksPatch = Static<typeof fixedTasksPatchSchema>
export const fixedTasksPatchValidator = getValidator(fixedTasksPatchSchema, dataValidator)
export const fixedTasksPatchResolver = resolve<FixedTasks, HookContext<FixedTasksService>>({})

// Schema for allowed query properties
export const fixedTasksQueryProperties = Type.Pick(fixedTasksSchema, ['id', 'text', 'description', 'point', 'userId', 'userCreated', 'donviId', 'phongId'], {

})
export const fixedTasksQuerySchema = Type.Intersect(
  [
    // Add additional query properties here
    querySyntax(fixedTasksQueryProperties,
      { description: { $like: Type.String() } },
      { text: { $like: Type.String() } }
    ),
    // Add additional query properties here
    Type.Object({})
  ],
  { additionalProperties: false }
)
export type FixedTasksQuery = Static<typeof fixedTasksQuerySchema>
export const fixedTasksQueryValidator = getValidator(fixedTasksQuerySchema, queryValidator)
export const fixedTasksQueryResolver = resolve<FixedTasksQuery, HookContext<FixedTasksService>>({})
