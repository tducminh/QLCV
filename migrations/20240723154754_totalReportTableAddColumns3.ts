import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('total-report', (table) => {
        table.string('PhongName')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('total-report', (table) => {
        table.dropColumn('PhongName')
    })
}

