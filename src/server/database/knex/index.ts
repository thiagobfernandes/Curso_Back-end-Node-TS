import knex from "knex";
import {development, production, test} from './Environment';


const getEnviroment = () => { // aqui estou definindo o tipo do ambiente
    switch(process.env.NODE_ENV){
        case 'production': return production;
        case 'test': return test;
        default: return development
    } // definindo ambietnes
}

export const Knex = knex(getEnviroment());