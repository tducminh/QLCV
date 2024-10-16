// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('fixed-tasks', (table) => {
    table.increments('id')

    table.string('text')
    table.string('description')
    table.integer('userId')
    table.integer('donviId')
    table.integer('phongId')
    table.string('createdAt')
    table.string('userCreated')
    table.integer('point')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('fixed-tasks')
}
