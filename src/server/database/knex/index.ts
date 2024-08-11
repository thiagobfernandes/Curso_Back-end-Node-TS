import knex from "knex";
import {development, production, test} from './Environment';
import pg from "pg";
import 'dotenv/config'

if(process.env.NODE_ENV === 'production'){
  pg.types.setTypeParser(20, 'text', parseInt)
    
}


const getEnviroment = () => { // aqui estou definindo o tipo do ambiente
    switch(process.env.NODE_ENV){
        case 'production': return production;
        case 'test': return test;
        default: return development
    } // definindo ambietnes
}

export const Knex = knex(getEnviroment());