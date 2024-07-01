import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('task-comments', (table) => {
        table.integer('uploadId')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('task-comments', (table) => {
        table.dropColumn('uploadId')
    })
}

