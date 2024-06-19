// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Donvi, DonviData, DonviPatch, DonviQuery, DonviService } from './donvi.class'

export type { Donvi, DonviData, DonviPatch, DonviQuery }

export type DonviClientService = Pick<DonviService<Params<DonviQuery>>, (typeof donviMethods)[number]>

export const donviPath = 'donvi'

export const donviMethods: Array<keyof DonviService> = ['find', 'get', 'create', 'patch', 'remove']

export const donviClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(donviPath, connection.service(donviPath), {
    methods: donviMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [donviPath]: DonviClientService
  }
}
