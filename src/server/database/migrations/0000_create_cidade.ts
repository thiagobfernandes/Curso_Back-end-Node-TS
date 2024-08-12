import {Knex} from 'knex';
import { EtableNames } from '../knex/ETableNames';



export async function up(knex: Knex)  { //metodo up criando a tabela
    return knex.schema.createTable(EtableNames.cidades, table => {
        table.bigIncrements('id').primary().index();
        table.string('nome').checkLength('<=', 150).index().notNullable(); //Coluna que vai ser do tipo BIginteger, auto incrementada
        table.comment('Tabela utilizada para armazenar cidades do sistemas')

    })
    .then(() => {
        console.log(` # Create table ${EtableNames.cidades}`);
    });
    
}
export async function down(knex: Knex) {
    return knex.schema.dropTable(EtableNames.cidades)
    .then(() => {
        console.log(`# drop table ${EtableNames.cidades}`);
    });
    
    
}
