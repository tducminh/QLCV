import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('upload', (table) => {
        table.integer('size')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('upload', (table) => {
        table.dropColumn('size')
    })
}

