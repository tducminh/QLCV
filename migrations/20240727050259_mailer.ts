// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('mailer', (table) => {
    table.increments('id')

    table.string('name')
    table.string('from')
    table.string('to')
    table.string('subject')
    table.string('text')
    table.string('html')
    table.string('attachments')
    table.string('mailStatus').defaultTo('pending')
    table.string('errMsg')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('mailer')
}
