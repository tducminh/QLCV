// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('phong', (table) => {
    table.increments('id')

    table.string('ma').unique()
    table.string('ten').unique()
    table.string('ghichu')
    table.string('createdAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('phong')
}
