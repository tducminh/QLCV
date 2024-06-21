// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { NhomctService } from './nhomct.class'

// Main data model schema
export const nhomctSchema = Type.Object(
  {
    id: Type.Number(),
    ma: Type.String(),
    ten: Type.String(),
    ghichu: Type.Optional(Type.String()),
    createdAt: Type.Optional(Type.String({ format: 'date-time' }))
  },
  { $id: 'Nhomct', additionalProperties: false }
)
export type Nhomct = Static<typeof nhomctSchema>
export const nhomctValidator = getValidator(nhomctSchema, dataValidator)
export const nhomctResolver = resolve<Nhomct, HookContext<NhomctService>>({})

export const nhomctExternalResolver = resolve<Nhomct, HookContext<NhomctService>>({})

// Schema for creating new entries
export const nhomctDataSchema = Type.Pick(nhomctSchema, ['ma', 'ten', 'ghichu', 'createdAt'], {
  $id: 'NhomctData'
})
export type NhomctData = Static<typeof nhomctDataSchema>
export const nhomctDataValidator = getValidator(nhomctDataSchema, dataValidator)
export const nhomctDataResolver = resolve<Nhomct, HookContext<NhomctService>>({})

// Schema for updating existing entries
export const nhomctPatchSchema = Type.Partial(nhomctSchema, {
  $id: 'NhomctPatch'
})
export type NhomctPatch = Static<typeof nhomctPatchSchema>
export const nhomctPatchValidator = getValidator(nhomctPatchSchema, dataValidator)
export const nhomctPatchResolver = resolve<Nhomct, HookContext<NhomctService>>({})

// Schema for allowed query properties
export const nhomctQueryProperties = Type.Pick(nhomctSchema, ['id', 'ma', 'ten', 'ghichu', 'createdAt'])
export const nhomctQuerySchema = Type.Intersect(
  [
    querySyntax(nhomctQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type NhomctQuery = Static<typeof nhomctQuerySchema>
export const nhomctQueryValidator = getValidator(nhomctQuerySchema, queryValidator)
export const nhomctQueryResolver = resolve<NhomctQuery, HookContext<NhomctService>>({})
