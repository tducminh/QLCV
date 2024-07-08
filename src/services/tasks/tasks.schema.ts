// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { TaskService } from './tasks.class'
import { userSchema } from '../users/users.schema'

// Main data model schema
export const taskSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String(),
    description: Type.Optional(Type.String()),
    assignedTo: Type.Optional(Type.String()),
    idAssignedTo: Type.Optional(Type.String()),
    dueDate: Type.Optional(Type.String({ format: 'date-time' })),
    completed: Type.Optional(Type.Boolean()),
    note: Type.Optional(Type.String()),
    userId: Type.Number(),
    userCreated: Type.Optional(Type.String()),
    user: Type.Ref(userSchema),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    point: Type.Optional(Type.Number()),
    taskId: Type.Optional(Type.Number())
  },
  { $id: 'Task', additionalProperties: false }
)
export type Task = Static<typeof taskSchema>
export const taskValidator = getValidator(taskSchema, dataValidator)
export const taskResolver = resolve<Task, HookContext<TaskService>>({
  user: virtual(async (task, context) => {
    // Associate the user that sent the task
    return context.app.service('users').get(task.userId)
  }),

})

export const taskExternalResolver = resolve<Task, HookContext<TaskService>>({})

// Schema for creating new entries
export const taskDataSchema = Type.Pick(taskSchema, ['text', 'description', 'assignedTo', 'dueDate', 'completed', 'note', 'userCreated', 'point', 'taskId', 'userId', 'idAssignedTo'], {
  $id: 'TaskData'
})
export type TaskData = Static<typeof taskDataSchema>
export const taskDataValidator = getValidator(taskDataSchema, dataValidator)
export const taskDataResolver = resolve<Task, HookContext<TaskService>>({
  userId: async (_value, _message, context) => {
    // Associate the record with the id of the authenticated user
    if (context.params.user) {
      return context.params.user.id
    }
  },
  createdAt: async () => {
    return new Date().toISOString()
  },
  userCreated: async (_value, _task, context) => {
    if (context.params.user) {
      return context.params.user.Ma
    }
  },



})

// Schema for updating existing entries
export const taskPatchSchema = Type.Partial(taskSchema, {
  $id: 'TaskPatch'
})
export type TaskPatch = Static<typeof taskPatchSchema>
export const taskPatchValidator = getValidator(taskPatchSchema, dataValidator)
export const taskPatchResolver = resolve<Task, HookContext<TaskService>>({})

// Schema for allowed query properties
export const taskQueryProperties = Type.Pick(taskSchema, ['id', 'text', 'description', 'assignedTo',
  'dueDate', 'completed', 'note', 'userCreated', 'point', 'taskId', 'userId', 'idAssignedTo'], {

})
export const taskQuerySchema = Type.Intersect(
  [
    querySyntax(taskQueryProperties,
      { idAssignedTo: { $like: Type.String() } },
      { text: { $like: Type.String() } }
    ),
    // Add additional query properties here
    Type.Object({})
  ],
  { additionalProperties: false }
)
export type TaskQuery = Static<typeof taskQuerySchema>
export const taskQueryValidator = getValidator(taskQuerySchema, queryValidator)
export const taskQueryResolver = resolve<TaskQuery, HookContext<TaskService>>({})


