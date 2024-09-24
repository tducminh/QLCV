// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { TaskService } from './tasks.class'
import { userSchema } from '../users/users.schema'
import { donviSchema } from '../donvi/donvi.schema'

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
    nvCompleted: Type.Optional(Type.Boolean()),
    note: Type.Optional(Type.String()),
    userId: Type.Number(),
    userCreated: Type.Optional(Type.String()),
    user: Type.Ref(userSchema),
    createdAt: Type.Optional(Type.String({ format: 'date-time' })),
    point: Type.Optional(Type.Number()),
    pointAsset: Type.Optional(Type.Number()),
    taskId: Type.Optional(Type.Number()),
    isRepeat: Type.Optional(Type.Boolean()),
    repeatCycle: Type.Optional(Type.Number()),
    repeatUntil: Type.Optional(Type.String({ format: 'date-time' })),
    isCanceled: Type.Optional(Type.Boolean()),
    donviId: Type.Optional(Type.Number()),
    donvi: Type.Ref(donviSchema),
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
  donvi: virtual(async (task, context) => {
    if (task.donviId) {
      var d = await context.app.service('donvi').get(task.donviId)
      if (d) {
        return d;
      }
    }

  }),
})

export const taskExternalResolver = resolve<Task, HookContext<TaskService>>({})

// Schema for creating new entries
export const taskDataSchema = Type.Pick(taskSchema, ['text', 'description', 'assignedTo', 'dueDate',
  'completed', 'note', 'userCreated', 'point', 'pointAsset', 'taskId', 'userId', 'idAssignedTo',
  'isRepeat', 'repeatCycle', 'isCanceled', 'repeatUntil', 'donviId', 'nvCompleted'], {
  $id: 'TaskData'
})
export type TaskData = Static<typeof taskDataSchema>
export const taskDataValidator = getValidator(taskDataSchema, dataValidator)
export const taskDataResolver = resolve<Task, HookContext<TaskService>>({
  userId: async (_value, _task, context) => {
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
  completed: async () => false,
  taskId: async (_value, _task, context) => {
    if (_value) {
      return _value;
    } else {
      return 0;
    }
  },
  donviId: async (_value, _task, context) => {
    if (context.params.user) {
      return context.params.user.DonviId;
    } else {
      return 0;
    }
  }

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
  'dueDate', 'completed', 'note', 'userCreated', 'point', 'pointAsset', 'taskId', 'userId', 'idAssignedTo',
  'isRepeat', 'repeatCycle', 'isCanceled', 'repeatUntil', 'donviId', 'nvCompleted'], {

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


