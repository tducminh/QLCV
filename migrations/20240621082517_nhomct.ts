// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('nhomct', (table) => {
    table.increments('id')

    table.string('ma')
    table.string('ten')
    table.string('ghichu')
    table.string('createdAt')
    table.integer('dvId')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('nhomct')
}
