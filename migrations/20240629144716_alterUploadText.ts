import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('upload', (table) => {
        table.text('content').alter();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('upload', (table) => {
        table.string('content').alter();
    })
}

