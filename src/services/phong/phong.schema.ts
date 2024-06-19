// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { PhongService } from './phong.class'

// Main data model schema
export const phongSchema = Type.Object(
  {
    id: Type.Number(),
    ma: Type.String(),
    ten: Type.String(),
    ghichu: Type.String(),
    createdAt: Type.Optional(Type.String({ format: 'date-time' }))
  },
  { $id: 'Phong', additionalProperties: false }
)
export type Phong = Static<typeof phongSchema>
export const phongValidator = getValidator(phongSchema, dataValidator)
export const phongResolver = resolve<Phong, HookContext<PhongService>>({})

export const phongExternalResolver = resolve<Phong, HookContext<PhongService>>({})

// Schema for creating new entries
export const phongDataSchema = Type.Pick(phongSchema, ['ma', 'ten', 'ghichu', 'createdAt'], {
  $id: 'PhongData'
})
export type PhongData = Static<typeof phongDataSchema>
export const phongDataValidator = getValidator(phongDataSchema, dataValidator)
export const phongDataResolver = resolve<Phong, HookContext<PhongService>>({})

// Schema for updating existing entries
export const phongPatchSchema = Type.Partial(phongSchema, {
  $id: 'PhongPatch'
})
export type PhongPatch = Static<typeof phongPatchSchema>
export const phongPatchValidator = getValidator(phongPatchSchema, dataValidator)
export const phongPatchResolver = resolve<Phong, HookContext<PhongService>>({})

// Schema for allowed query properties
export const phongQueryProperties = Type.Pick(phongSchema, ['id', 'ma', 'ten', 'ghichu', 'createdAt'])
export const phongQuerySchema = Type.Intersect(
  [
    querySyntax(phongQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type PhongQuery = Static<typeof phongQuerySchema>
export const phongQueryValidator = getValidator(phongQuerySchema, queryValidator)
export const phongQueryResolver = resolve<PhongQuery, HookContext<PhongService>>({})
