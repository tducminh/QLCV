// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  FixedTasks,
  FixedTasksData,
  FixedTasksPatch,
  FixedTasksQuery,
  FixedTasksService
} from './fixed-tasks.class'

export type { FixedTasks, FixedTasksData, FixedTasksPatch, FixedTasksQuery }

export type FixedTasksClientService = Pick<
  FixedTasksService<Params<FixedTasksQuery>>,
  (typeof fixedTasksMethods)[number]
>

export const fixedTasksPath = 'fixed-tasks'

export const fixedTasksMethods: Array<keyof FixedTasksService> = ['find', 'get', 'create', 'patch', 'remove']

export const fixedTasksClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(fixedTasksPath, connection.service(fixedTasksPath), {
    methods: fixedTasksMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [fixedTasksPath]: FixedTasksClientService
  }
}
