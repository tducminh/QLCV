import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('thongbao', (table) => {
        table.integer('toUserId')
    })
}



export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('thongbao', (table) => {
        table.dropColumn('toUserId')
    })
}

