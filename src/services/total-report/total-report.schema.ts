// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { TotalReportService } from './total-report.class'
import { userSchema } from '../users/users.schema'
import { donviSchema } from '../donvi/donvi.schema'
import { phongSchema } from '../phong/phong.schema'

// Main data model schema
export const totalReportSchema = Type.Object(
  {
    id: Type.Number(),
    createdAt: Type.String({ format: 'date-time' }),
    userId: Type.Number(),
    DonviId: Type.Optional(Type.Number()),
    PhongId: Type.Optional(Type.Number()),
    points: Type.Number(),
    tCount: Type.Number(),
    points1: Type.Number(),
    tCount1: Type.Number(),
    note: Type.Optional(Type.String()),
    user: Type.Ref(userSchema),
    donvi: Type.Ref(donviSchema),
    phong: Type.Ref(phongSchema),
    userName: Type.Optional(Type.String()),
  },
  { $id: 'TotalReport', additionalProperties: false }
)
export type TotalReport = Static<typeof totalReportSchema>
export const totalReportValidator = getValidator(totalReportSchema, dataValidator)
export const totalReportResolver = resolve<TotalReport, HookContext<TotalReportService>>({
  user: virtual(async (totalReport, context) => {
    // Associate the user that sent the task
    return context.app.service('users').get(totalReport.userId)
  }),
  donvi: virtual(async (totalReport, context) => {
    if (totalReport.DonviId) {
      var d = await context.app.service('donvi').get(totalReport.DonviId)
      if (d) {
        return d;
      }
    }

  }),
  phong: virtual(async (totalReport, context) => {
    if (totalReport.PhongId) {
      var p = await context.app.service('phong').get(totalReport.PhongId)
      if (p) {
        return p;
      }
    }

  }),
})

export const totalReportExternalResolver = resolve<TotalReport, HookContext<TotalReportService>>({})

// Schema for creating new entries
export const totalReportDataSchema = Type.Pick(totalReportSchema, ['createdAt', 'userId', 'DonviId', 'PhongId',
  'points', 'tCount', 'points1', 'tCount1', 'note', 'userName'], {
  $id: 'TotalReportData'
})
export type TotalReportData = Static<typeof totalReportDataSchema>
export const totalReportDataValidator = getValidator(totalReportDataSchema, dataValidator)
export const totalReportDataResolver = resolve<TotalReport, HookContext<TotalReportService>>({
  createdAt: async () => {
    return new Date().toISOString()
  },
  DonviId: async (_value, _totalReport, context) => {
    if (context.params.user) {
      return context.params.user.DonviId;
    }
  },
  PhongId: async (_value, _totalReport, context) => {
    if (context.params.user) {
      return context.params.user.PhongId;
    }
  }
})

// Schema for updating existing entries
export const totalReportPatchSchema = Type.Partial(totalReportSchema, {
  $id: 'TotalReportPatch'
})
export type TotalReportPatch = Static<typeof totalReportPatchSchema>
export const totalReportPatchValidator = getValidator(totalReportPatchSchema, dataValidator)
export const totalReportPatchResolver = resolve<TotalReport, HookContext<TotalReportService>>({})

// Schema for allowed query properties
export const totalReportQueryProperties = Type.Pick(totalReportSchema, ['id', 'createdAt', 'userId', 'DonviId', 'PhongId',
  'points', 'tCount', 'points1', 'tCount1', 'note', 'userName'], {

})
export const totalReportQuerySchema = Type.Intersect(
  [
    querySyntax(totalReportQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type TotalReportQuery = Static<typeof totalReportQuerySchema>
export const totalReportQueryValidator = getValidator(totalReportQuerySchema, queryValidator)
export const totalReportQueryResolver = resolve<TotalReportQuery, HookContext<TotalReportService>>({})
