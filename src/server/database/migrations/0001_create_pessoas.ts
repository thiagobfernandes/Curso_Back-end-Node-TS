import { Knex } from "knex";
import { EtableNames } from "../knex/ETableNames";

export async function up(knex: Knex) {
    return knex.schema.createTable(EtableNames.pessoas , table => {
        table.bigIncrements('id').primary().index(),
        table.string('nome').checkLength('<=', 200).index().notNullable(),
        table.string('email').checkLength('<=',400).unique().notNullable(),
        table.bigInteger('cidadeId')
        .index()
        .notNullable()
        .references('id')
        .inTable(EtableNames.cidades)
        .onUpdate('CASCADE')
        .onDelete('RESTRICT') // vai tentaR apagar a cidade, tem a pessoa ele nao apaga so se alterar manualmente

        table.comment("tabela usada para armazenar pessoas")

    }) .then(() => {
        console.log("# Create de Pessoas Criadas")
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(EtableNames.pessoas)
    .then(() => {
        console.log(`# drop table ${EtableNames.pessoas}`);
    });
    
}