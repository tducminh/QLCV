// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { DonviService } from './donvi.class'
import { timeEnd } from 'console'

// Main data model schema
export const donviSchema = Type.Object(
  {
    id: Type.Number(),
    ma: Type.String(),
    ten: Type.String(),
    createdAt: Type.Optional(Type.String({ format: 'date-time' }))
  },
  { $id: 'Donvi', additionalProperties: false }
)
export type Donvi = Static<typeof donviSchema>
export const donviValidator = getValidator(donviSchema, dataValidator)
export const donviResolver = resolve<Donvi, HookContext<DonviService>>({})

export const donviExternalResolver = resolve<Donvi, HookContext<DonviService>>({})

// Schema for creating new entries
export const donviDataSchema = Type.Pick(donviSchema, ['ma', 'ten', 'createdAt'], {
  $id: 'DonviData'
})
export type DonviData = Static<typeof donviDataSchema>
export const donviDataValidator = getValidator(donviDataSchema, dataValidator)
export const donviDataResolver = resolve<Donvi, HookContext<DonviService>>({})

// Schema for updating existing entries
export const donviPatchSchema = Type.Partial(donviSchema, {
  $id: 'DonviPatch'
})
export type DonviPatch = Static<typeof donviPatchSchema>
export const donviPatchValidator = getValidator(donviPatchSchema, dataValidator)
export const donviPatchResolver = resolve<Donvi, HookContext<DonviService>>({})

// Schema for allowed query properties
export const donviQueryProperties = Type.Pick(donviSchema, ['id', 'ma', 'ten', 'createdAt'])
export const donviQuerySchema = Type.Intersect(
  [
    querySyntax(donviQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type DonviQuery = Static<typeof donviQuerySchema>
export const donviQueryValidator = getValidator(donviQuerySchema, queryValidator)
export const donviQueryResolver = resolve<DonviQuery, HookContext<DonviService>>({})
