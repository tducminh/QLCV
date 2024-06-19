// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Phong, PhongData, PhongPatch, PhongQuery, PhongService } from './phong.class'

export type { Phong, PhongData, PhongPatch, PhongQuery }

export type PhongClientService = Pick<PhongService<Params<PhongQuery>>, (typeof phongMethods)[number]>

export const phongPath = 'phong'

export const phongMethods: Array<keyof PhongService> = ['find', 'get', 'create', 'patch', 'remove']

export const phongClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(phongPath, connection.service(phongPath), {
    methods: phongMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [phongPath]: PhongClientService
  }
}
