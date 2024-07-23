import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('total-report', (table) => {

        table.integer('points1')
        table.integer('tCount1')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('total-report', (table) => {
        table.dropColumn('points1')
        table.dropColumn('tCount1')
    })
}

