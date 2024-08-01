import { Knex } from "knex";
import path from 'path'
 // nesse arquivo estou criando um banco de dados local 

export  const development: Knex.Config = {
    client: 'sqlite3', //banco de dados local,
    useNullAsDefault:true,
    connection:{
        filename:path.resolve(__dirname,'..','..','..','..', 'database.sqlite'), // caminho aonde vai ser criado o db
    },
    migrations:{
        directory:path.resolve(__dirname, '..', 'migrations'), 
    },
    seeds:{
        directory:path.resolve(__dirname, '..', 'seeds'), 
    },
    pool: {
        afterCreate: (connection: any , done: Function) => {
            connection.run('PRAGMA foreing_keys = ON'); // aqui estou falanado que o banco de dados pode trabalhar com chaves estrangeiras
            done();

        }
    }
};




export  const test :Knex.Config = {
    
...development,
 connection : ':memory',  // coneccao em memoria, quando termina o teste o banco de dados e apagado
    };




export  const production:Knex.Config = {
    ...development,
};