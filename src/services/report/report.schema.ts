// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { ReportService } from './report.class'
import { totalReportSchema } from '../total-report/total-report.schema'
import { userSchema } from '../users/users.schema'
import { donviSchema } from '../donvi/donvi.schema'
import { phongSchema } from '../phong/phong.schema'

// Main data model schema
export const reportSchema = Type.Object(
  {
    id: Type.Number(),
    createdAt: Type.String({ format: 'date-time' }),
    userId: Type.Number(),
    DonviId: Type.Optional(Type.Number()),
    PhongId: Type.Optional(Type.Number()),
    PhongName: Type.Optional(Type.String()),
    points: Type.Number(),
    tCount: Type.Number(),
    note: Type.Optional(Type.String()),
    user: Type.Ref(userSchema),
    donvi: Type.Ref(donviSchema),
    phong: Type.Ref(phongSchema),
    rptName: Type.String(),
    tuNgay: Type.Optional(Type.String({ format: 'date-time' })),
    denNgay: Type.Optional(Type.String({ format: 'date-time' })),
  },
  { $id: 'Report', additionalProperties: false }
)
export type Report = Static<typeof reportSchema>
export const reportValidator = getValidator(reportSchema, dataValidator)
export const reportResolver = resolve<Report, HookContext<ReportService>>({
})

export const reportExternalResolver = resolve<Report, HookContext<ReportService>>({})

// Schema for creating new entries
export const reportDataSchema = Type.Pick(reportSchema, ['createdAt', 'userId', 'DonviId', 'PhongId', 'PhongName', 'points', 'tCount', 'note', 'rptName'], {
  $id: 'ReportData'
})
export type ReportData = Static<typeof reportDataSchema>
export const reportDataValidator = getValidator(reportDataSchema, dataValidator)
export const reportDataResolver = resolve<Report, HookContext<ReportService>>({

})

// Schema for updating existing entries
export const reportPatchSchema = Type.Partial(reportSchema, {
  $id: 'ReportPatch'
})
export type ReportPatch = Static<typeof reportPatchSchema>
export const reportPatchValidator = getValidator(reportPatchSchema, dataValidator)
export const reportPatchResolver = resolve<Report, HookContext<ReportService>>({})

// Schema for allowed query properties
export const reportQueryProperties = Type.Pick(reportSchema, ['id', 'createdAt', 'userId', 'DonviId', 'PhongId', 'PhongName', 'points', 'tCount', 'note', 'rptName', 'tuNgay', 'denNgay'], {

})
export const reportQuerySchema = Type.Intersect(
  [
    querySyntax(reportQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type ReportQuery = Static<typeof reportQuerySchema>
export const reportQueryValidator = getValidator(reportQuerySchema, queryValidator)
export const reportQueryResolver = resolve<ReportQuery, HookContext<ReportService>>({})
