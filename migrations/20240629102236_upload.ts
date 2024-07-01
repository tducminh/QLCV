// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('upload', (table) => {
    table.increments('id')

    table.string('filename')
    table.string('fileType')
    table.string('url')
    table.text('content')
    table.integer('userId')
    table.integer('taskId')
    table.string('createdAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('upload')
}
