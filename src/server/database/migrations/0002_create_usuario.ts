import { EtableNames } from "../knex/ETableNames";
import knex, { Knex } from "knex";

export async function up(knex:Knex){
    return knex.schema.createTable(EtableNames.usuarios, table => {
        table.bigIncrements('id').primary().index(),
        table.string('nome').checkLength('>', 3).notNullable(),
        table.string('email').notNullable().unique().checkLength('>', 6),
        table.string('password').checkLength('>',6).index().notNullable()
        

        table.comment("tabela para controle de usuarios")

})
.then(() => {
    console.log("# Tabela de usuarios Criada com Sucesso")
})

}

export async function down(knex: Knex){
    return knex.schema.dropTable(EtableNames.usuarios)
    .then(() => {
        console.log("# Tabela deletada com sucesso");
    })
    
}
