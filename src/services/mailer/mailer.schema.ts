// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { MailerService } from './mailer.class'

// Main data model schema
export const mailerSchema = Type.Object(
  {
    id: Type.Number(),
    name: Type.String(),
    from: Type.String(),
    to: Type.String(),
    subject: Type.String(),
    html: Type.Optional(Type.String()),
    text: Type.String(),
    attachments: Type.Optional(Type.String()),
    mailStatus: Type.Optional(Type.String()),
    errMsg: Type.Optional(Type.String()),
  },
  { $id: 'Mailer', additionalProperties: false }
)
export type Mailer = Static<typeof mailerSchema>
export const mailerValidator = getValidator(mailerSchema, dataValidator)
export const mailerResolver = resolve<Mailer, HookContext<MailerService>>({})

export const mailerExternalResolver = resolve<Mailer, HookContext<MailerService>>({})

// Schema for creating new entries
export const mailerDataSchema = Type.Pick(mailerSchema, ['name', 'from', 'to', 'subject', 'html', 'text', 'attachments', 'mailStatus', 'errMsg'], {
  $id: 'MailerData'
})
export type MailerData = Static<typeof mailerDataSchema>
export const mailerDataValidator = getValidator(mailerDataSchema, dataValidator)
export const mailerDataResolver = resolve<Mailer, HookContext<MailerService>>({})

// Schema for updating existing entries
export const mailerPatchSchema = Type.Partial(mailerSchema, {
  $id: 'MailerPatch'
})
export type MailerPatch = Static<typeof mailerPatchSchema>
export const mailerPatchValidator = getValidator(mailerPatchSchema, dataValidator)
export const mailerPatchResolver = resolve<Mailer, HookContext<MailerService>>({})

// Schema for allowed query properties
export const mailerQueryProperties = Type.Pick(mailerSchema, ['id', 'name', 'from', 'to', 'subject', 'html', 'text', 'attachments', 'mailStatus', 'errMsg'], {

})
export const mailerQuerySchema = Type.Intersect(
  [
    querySyntax(mailerQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type MailerQuery = Static<typeof mailerQuerySchema>
export const mailerQueryValidator = getValidator(mailerQuerySchema, queryValidator)
export const mailerQueryResolver = resolve<MailerQuery, HookContext<MailerService>>({})
