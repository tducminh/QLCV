// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('thongbao', (table) => {
    table.increments('id')

    table.string('text')
    table.string('dateCreated')
    table.integer('taskId')
    table.integer('userId')
    table.boolean('isRead').defaultTo(false)
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('thongbao')
}
