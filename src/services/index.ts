import { taskcomments } from './task-comments/task-comments'
import { task } from './tasks/tasks'
import { phong } from './phong/phong'
import { donvi } from './donvi/donvi'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(taskcomments)
  app.configure(task)
  app.configure(phong)
  app.configure(donvi)
  app.configure(user)
  // All services will be registered here
}
