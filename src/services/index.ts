import { msgAttachments } from './msg-attachments/msg-attachments'
import { messages } from './messages/messages'
import { participants } from './participants/participants'
import { conversation } from './conversation/conversation'
import { mailer } from './mailer/mailer'
import { totalReport } from './total-report/total-report'
import { report } from './report/report'

import { thongbao } from './thongbao/thongbao'
import { upload } from './upload/upload'
import { nhomct } from './nhomct/nhomct'
import { taskcomments } from './task-comments/task-comments'
import { task } from './tasks/tasks'
import { phong } from './phong/phong'
import { donvi } from './donvi/donvi'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(msgAttachments)
  app.configure(messages)
  app.configure(participants)
  app.configure(conversation)
  app.configure(mailer)
  app.configure(totalReport)
  app.configure(report)
  app.configure(thongbao)
  app.configure(upload)
  app.configure(nhomct)
  app.configure(taskcomments)
  app.configure(task)
  app.configure(phong)
  app.configure(donvi)
  app.configure(user)
  // All services will be registered here
}
