// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('task-comments', (table) => {
    table.increments('id')

    table.string('text')
    table.string('dateCreated')
    table.integer('TaskId').references('id').inTable('tasks')
    table.integer('UserId').references('id').inTable('users')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('task-comments')
}
