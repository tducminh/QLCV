import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('total-report', (table) => {

        table.string('userName')
        table.string('note')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('total-report', (table) => {
        table.dropColumn('userName')
        table.dropColumn('note')
    })
}

