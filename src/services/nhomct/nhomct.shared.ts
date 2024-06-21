// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Nhomct, NhomctData, NhomctPatch, NhomctQuery, NhomctService } from './nhomct.class'

export type { Nhomct, NhomctData, NhomctPatch, NhomctQuery }

export type NhomctClientService = Pick<NhomctService<Params<NhomctQuery>>, (typeof nhomctMethods)[number]>

export const nhomctPath = 'nhomct'

export const nhomctMethods: Array<keyof NhomctService> = ['find', 'get', 'create', 'patch', 'remove']

export const nhomctClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(nhomctPath, connection.service(nhomctPath), {
    methods: nhomctMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [nhomctPath]: NhomctClientService
  }
}
