// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  MsgAttachments,
  MsgAttachmentsData,
  MsgAttachmentsPatch,
  MsgAttachmentsQuery,
  MsgAttachmentsService
} from './msg-attachments.class'

export type { MsgAttachments, MsgAttachmentsData, MsgAttachmentsPatch, MsgAttachmentsQuery }

export type MsgAttachmentsClientService = Pick<
  MsgAttachmentsService<Params<MsgAttachmentsQuery>>,
  (typeof msgAttachmentsMethods)[number]
>

export const msgAttachmentsPath = 'msg-attachments'

export const msgAttachmentsMethods: Array<keyof MsgAttachmentsService> = [
  'find',
  'get',
  'create',
  'patch',
  'remove'
]

export const msgAttachmentsClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(msgAttachmentsPath, connection.service(msgAttachmentsPath), {
    methods: msgAttachmentsMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [msgAttachmentsPath]: MsgAttachmentsClientService
  }
}
