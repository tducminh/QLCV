// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('total-report', (table) => {
    table.increments('id')

    table.integer('userId')
    table.integer('points').defaultTo(0)
    table.integer('tCount').defaultTo(0)
    table.integer('PhongId')
    table.integer('DonviId')
    table.string('createdAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('total-report')
}
