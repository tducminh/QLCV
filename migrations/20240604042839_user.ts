// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id')

    table.string('Ma').unique()
    table.string('Ten')
    table.integer('level').defaultTo(2)
    table.string('email').unique()
    table.string('password')
    table.integer('PhongId')
    table.integer('DonviId')
    table.string('createdAt')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}
