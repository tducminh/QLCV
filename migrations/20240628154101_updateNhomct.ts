import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('nhomct', (table) => {
        table.integer('dvId').references('id').inTable('donvi')

    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('nhomct', (table) => {
        table.dropColumn('dvId')
    })
}

