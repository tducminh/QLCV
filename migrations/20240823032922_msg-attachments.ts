// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('msg-attachments', (table) => {
    table.increments('id')

    table.integer('msgId')
    table.integer('uploadId')
    table.string('createdAt')
    table.string('updatedAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('msg-attachments')
}
