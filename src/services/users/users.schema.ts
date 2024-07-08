// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'
import { passwordHash } from '@feathersjs/authentication-local'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { UserService } from './users.class'
import { level } from 'winston'
import { donviSchema } from '../donvi/donvi.schema'
import { phongSchema } from '../phong/phong.schema'

// Main data model schema
export const userSchema = Type.Object(
  {
    id: Type.Number(),
    Ma: Type.String(),
    Ten: Type.String(),
    email: Type.String(),
    password: Type.Optional(Type.String()),
    level: Type.Number(),
    PhongId: Type.Number(),
    DonviId: Type.Number(),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    avatar: Type.Optional(Type.String()),
    donvi: Type.Ref(donviSchema),
    phong: Type.Ref(phongSchema),
    isLock: Type.Optional(Type.Boolean()),
  },
  { $id: 'User', additionalProperties: false }
)
export type User = Static<typeof userSchema>
export const userValidator = getValidator(userSchema, dataValidator)
export const userResolver = resolve<User, HookContext<UserService>>({
  donvi: virtual(async (user, context) => {
    // Associate the Donvi that Phong belongs to
    if (user.DonviId) {
      return context.app.service('donvi').get(user.DonviId)
    }

  }),
  phong: virtual(async (user, context) => {
    // Associate the Donvi that Phong belongs to
    if (user.PhongId) {
      return context.app.service('phong').get(user.PhongId)
    }

  })
})

export const userExternalResolver = resolve<User, HookContext<UserService>>({
  // The password should never be visible externally
  password: async () => undefined
})

// Schema for creating new entries
export const userDataSchema = Type.Pick(userSchema, ['email', 'password', 'Ma', 'Ten', 'level', 'PhongId', 'DonviId', 'createdAt', 'avatar', 'isLock'], {
  $id: 'UserData'
})
export type UserData = Static<typeof userDataSchema>
export const userDataValidator = getValidator(userDataSchema, dataValidator)
export const userDataResolver = resolve<User, HookContext<UserService>>({
  password: passwordHash({ strategy: 'local' }),
  createdAt: async () => {
    return new Date().toISOString()
  },
})

// Schema for updating existing entries
export const userPatchSchema = Type.Partial(userSchema, {
  $id: 'UserPatch'
})
export type UserPatch = Static<typeof userPatchSchema>
export const userPatchValidator = getValidator(userPatchSchema, dataValidator)
export const userPatchResolver = resolve<User, HookContext<UserService>>({
  password: passwordHash({ strategy: 'local' })
})

// Schema for allowed query properties
export const userQueryProperties = Type.Pick(userSchema, ['id', 'Ma', 'Ten', 'email', 'level', 'PhongId', 'DonviId', 'createdAt', 'isLock'], {

})
export const userQuerySchema = Type.Intersect(
  [
    querySyntax(userQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type UserQuery = Static<typeof userQuerySchema>
export const userQueryValidator = getValidator(userQuerySchema, queryValidator)
export const userQueryResolver = resolve<UserQuery, HookContext<UserService>>({
  // // If there is a user (e.g. with authentication), they are only allowed to see their own data
  // id: async (value, user, context) => {
  //   if (context.params.user && context.params.user.level === 3) {
  //     return context.params.user.id
  //   }

  //   return value
  // }
})
