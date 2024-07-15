// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { ThongbaoService } from './thongbao.class'
import { userSchema } from '../users/users.schema'

// Main data model schema
export const thongbaoSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String(),
    dateCreated: Type.Optional(Type.String({ format: 'date-time' })),
    taskId: Type.Number(),
    userId: Type.Number(),
    user: Type.Ref(userSchema),
    toUserId: Type.Number(),
    isRead: Type.Optional(Type.Boolean()),
  },
  { $id: 'Thongbao', additionalProperties: false }
)
export type Thongbao = Static<typeof thongbaoSchema>
export const thongbaoValidator = getValidator(thongbaoSchema, dataValidator)
export const thongbaoResolver = resolve<Thongbao, HookContext<ThongbaoService>>({
  user: virtual(async (thongbao, context) => {
    // Associate the user that sent the task
    return context.app.service('users').get(thongbao.userId)
  }),
})

export const thongbaoExternalResolver = resolve<Thongbao, HookContext<ThongbaoService>>({})

// Schema for creating new entries
export const thongbaoDataSchema = Type.Pick(thongbaoSchema, ['text', 'dateCreated', 'taskId', 'userId', 'isRead', 'toUserId'], {
  $id: 'ThongbaoData'
})
export type ThongbaoData = Static<typeof thongbaoDataSchema>
export const thongbaoDataValidator = getValidator(thongbaoDataSchema, dataValidator)
export const thongbaoDataResolver = resolve<Thongbao, HookContext<ThongbaoService>>({})

// Schema for updating existing entries
export const thongbaoPatchSchema = Type.Partial(thongbaoSchema, {
  $id: 'ThongbaoPatch'
})
export type ThongbaoPatch = Static<typeof thongbaoPatchSchema>
export const thongbaoPatchValidator = getValidator(thongbaoPatchSchema, dataValidator)
export const thongbaoPatchResolver = resolve<Thongbao, HookContext<ThongbaoService>>({})

// Schema for allowed query properties
export const thongbaoQueryProperties = Type.Pick(thongbaoSchema, ['id', 'text', 'dateCreated', 'taskId', 'userId', 'isRead', 'toUserId'])
export const thongbaoQuerySchema = Type.Intersect(
  [
    querySyntax(thongbaoQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ThongbaoQuery = Static<typeof thongbaoQuerySchema>
export const thongbaoQueryValidator = getValidator(thongbaoQuerySchema, queryValidator)
export const thongbaoQueryResolver = resolve<ThongbaoQuery, HookContext<ThongbaoService>>({})
