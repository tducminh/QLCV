// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('messages', (table) => {
    table.increments('id')

    table.integer('conversationId')
    table.integer('senderId')
    table.string('guid')
    table.string('msgType')
    table.string('text')
    table.string('createdAt')
    table.string('updatedAt')
    table.string('deletedAt')
    table.integer('uploadId')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('messages')
}
