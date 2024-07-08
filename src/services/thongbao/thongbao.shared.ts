// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Thongbao, ThongbaoData, ThongbaoPatch, ThongbaoQuery, ThongbaoService } from './thongbao.class'

export type { Thongbao, ThongbaoData, ThongbaoPatch, ThongbaoQuery }

export type ThongbaoClientService = Pick<
  ThongbaoService<Params<ThongbaoQuery>>,
  (typeof thongbaoMethods)[number]
>

export const thongbaoPath = 'thongbao'

export const thongbaoMethods: Array<keyof ThongbaoService> = ['find', 'get', 'create', 'patch', 'remove']

export const thongbaoClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(thongbaoPath, connection.service(thongbaoPath), {
    methods: thongbaoMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [thongbaoPath]: ThongbaoClientService
  }
}
