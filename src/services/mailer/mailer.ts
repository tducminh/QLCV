// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  mailerDataValidator,
  mailerPatchValidator,
  mailerQueryValidator,
  mailerResolver,
  mailerExternalResolver,
  mailerDataResolver,
  mailerPatchResolver,
  mailerQueryResolver
} from './mailer.schema'

import type { Application } from '../../declarations'
import { MailerService, getOptions } from './mailer.class'
import { mailerPath, mailerMethods } from './mailer.shared'
import { logger } from '../../logger'

export * from './mailer.class'
export * from './mailer.schema'


// A configure function that registers the service and its hooks via `app.configure`
export const mailer = (app: Application) => {
  const setDefaultValues = () => {
    return async (context: any) => {

      if (!context.data) return context;
      switch (context.method) {
        case 'create':
          const smtpConfig = context.app.get('smtpConfig');
          context.data.from = context.data.from || `${smtpConfig.from.name} <${smtpConfig.from.email}>`;
          context.data.name = context.data.name || `${context.data.to} <${context.data.subject}>`
          context.data.mailStatus = 'pending';
          break;

        default: {
          return;
        }

      }
    }
  }
  const sendEmail = async (context: any) => {
    const smtpConfig = context.app.get('smtpConfig');
    if (!smtpConfig) throw new Error('SMTP config not found');
    const transporter = require('nodemailer').createTransport(smtpConfig);

    let status = 'pending';
    let errMsg = '';
    let error = null;

    try {
      await transporter.sendMail({
        from: context.data.from,
        to: context.data.to,
        subject: context.data.subject,
        text: context.data.text,
        html: context.data.html
      });
      status = 'success';
    } catch (err: any) {
      status = 'failed';
      errMsg = err.message;
      error = err;

      logger && logger.error(err);
    }
    context.data.mailStatus = status;
    context.data.errMsg = errMsg;
    context.data.error = error;

    context.result = await context.service(mailerPath).patch(context.id, {
      mailStatus: status, errMsg: errMsg
    });

    return context;
  }
  // Register our service on the Feathers application
  app.use(mailerPath, new MailerService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: mailerMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(mailerPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(mailerExternalResolver),
        schemaHooks.resolveResult(mailerResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(mailerQueryValidator), schemaHooks.resolveQuery(mailerQueryResolver)],
      find: [],
      get: [],
      create: [setDefaultValues(), schemaHooks.validateData(mailerDataValidator), schemaHooks.resolveData(mailerDataResolver)],
      patch: [schemaHooks.validateData(mailerPatchValidator), schemaHooks.resolveData(mailerPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [mailerPath]: MailerService
  }
}
