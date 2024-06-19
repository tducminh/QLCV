// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('tasks', (table) => {
    table.increments('id')

    table.string('text')
    table.string('description')
    table.string('assignedTo')
    table.string('dueDate')
    table.boolean('completed')
    table.string('note')
    table.string('userCreated')
    table.integer('userId')
    table.integer('point')
    table.string('createdAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('tasks')
}
