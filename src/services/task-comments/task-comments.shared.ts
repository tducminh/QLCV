// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  Taskcomments,
  TaskcommentsData,
  TaskcommentsPatch,
  TaskcommentsQuery,
  TaskcommentsService
} from './task-comments.class'

export type { Taskcomments, TaskcommentsData, TaskcommentsPatch, TaskcommentsQuery }

export type TaskcommentsClientService = Pick<
  TaskcommentsService<Params<TaskcommentsQuery>>,
  (typeof taskcommentsMethods)[number]
>

export const taskcommentsPath = 'task-comments'

export const taskcommentsMethods: Array<keyof TaskcommentsService> = [
  'find',
  'get',
  'create',
  'patch',
  'remove'
]

export const taskcommentsClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(taskcommentsPath, connection.service(taskcommentsPath), {
    methods: taskcommentsMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [taskcommentsPath]: TaskcommentsClientService
  }
}
