// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Application } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

import { fixedTasksClient } from './services/fixed-tasks/fixed-tasks.shared'
export type {
  FixedTasks,
  FixedTasksData,
  FixedTasksQuery,
  FixedTasksPatch
} from './services/fixed-tasks/fixed-tasks.shared'

import { msgAttachmentsClient } from './services/msg-attachments/msg-attachments.shared'
export type {
  MsgAttachments,
  MsgAttachmentsData,
  MsgAttachmentsQuery,
  MsgAttachmentsPatch
} from './services/msg-attachments/msg-attachments.shared'

import { messagesClient } from './services/messages/messages.shared'
export type {
  Messages,
  MessagesData,
  MessagesQuery,
  MessagesPatch
} from './services/messages/messages.shared'

import { participantsClient } from './services/participants/participants.shared'
export type {
  Participants,
  ParticipantsData,
  ParticipantsQuery,
  ParticipantsPatch
} from './services/participants/participants.shared'

import { conversationClient } from './services/conversation/conversation.shared'
export type {
  Conversation,
  ConversationData,
  ConversationQuery,
  ConversationPatch
} from './services/conversation/conversation.shared'

import { mailerClient } from './services/mailer/mailer.shared'
export type { Mailer, MailerData, MailerQuery, MailerPatch } from './services/mailer/mailer.shared'

import { totalReportClient } from './services/total-report/total-report.shared'
export type {
  TotalReport,
  TotalReportData,
  TotalReportQuery,
  TotalReportPatch
} from './services/total-report/total-report.shared'

import { reportClient } from './services/report/report.shared'
export type { Report, ReportData, ReportQuery, ReportPatch } from './services/report/report.shared'

import { thongbaoClient } from './services/thongbao/thongbao.shared'
export type {
  Thongbao,
  ThongbaoData,
  ThongbaoQuery,
  ThongbaoPatch
} from './services/thongbao/thongbao.shared'

import { uploadClient } from './services/upload/upload.shared'
export type { Upload, UploadData, UploadQuery, UploadPatch } from './services/upload/upload.shared'

import { nhomctClient } from './services/nhomct/nhomct.shared'
export type { Nhomct, NhomctData, NhomctQuery, NhomctPatch } from './services/nhomct/nhomct.shared'

import { taskcommentsClient } from './services/task-comments/task-comments.shared'
export type {
  Taskcomments,
  TaskcommentsData,
  TaskcommentsQuery,
  TaskcommentsPatch
} from './services/task-comments/task-comments.shared'

import { taskClient } from './services/tasks/tasks.shared'
export type { Task, TaskData, TaskQuery, TaskPatch } from './services/tasks/tasks.shared'

import { phongClient } from './services/phong/phong.shared'
export type { Phong, PhongData, PhongQuery, PhongPatch } from './services/phong/phong.shared'

import { donviClient } from './services/donvi/donvi.shared'
export type { Donvi, DonviData, DonviQuery, DonviPatch } from './services/donvi/donvi.shared'

import { userClient } from './services/users/users.shared'
export type { User, UserData, UserQuery, UserPatch } from './services/users/users.shared'

export interface Configuration {
  connection: TransportConnection<ServiceTypes>
}

export interface ServiceTypes {}

export type ClientApplication = Application<ServiceTypes, Configuration>

/**
 * Returns a typed client for the qlcv app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any,>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {}
) => {
  const client: ClientApplication = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(userClient)
  client.configure(donviClient)
  client.configure(phongClient)
  client.configure(taskClient)
  client.configure(taskcommentsClient)
  client.configure(nhomctClient)
  client.configure(uploadClient)

  client.configure(thongbaoClient)
  client.configure(reportClient)

  client.configure(totalReportClient)
  client.configure(mailerClient)
  client.configure(conversationClient)
  client.configure(participantsClient)
  client.configure(messagesClient)
  client.configure(msgAttachmentsClient)
  client.configure(fixedTasksClient)
  return client
}
