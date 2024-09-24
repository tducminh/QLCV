// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('conversation', (table) => {
    table.increments('id')

    table.string('title')
    table.integer('creatorId')
    table.string('channelId')
    table.string('createdAt')
    table.string('updatedAt')
    table.string('deletedAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('conversation')
}
