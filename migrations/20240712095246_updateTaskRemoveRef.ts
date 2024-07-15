import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('tasks', (table) => {
        table.dropColumn('taskId')
    })
    await knex.schema.alterTable('tasks', (table) => {
        table.integer('taskId')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('tasks', (table) => {
        table.dropColumn('taskId')
    })
}

