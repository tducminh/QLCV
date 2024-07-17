import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('tasks', (table) => {
        table.boolean('isRepeat').defaultTo(false)
        table.integer('repeatCycle').defaultTo(0)
        table.string('repeatUntil')
        table.boolean('isCanceled').defaultTo(false)
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('tasks', (table) => {
        table.dropColumn('isRepeat')
        table.dropColumn('repeatCycle')
        table.dropColumn('repeatUntil')
        table.dropColumn('isCanceled')
    })
}

