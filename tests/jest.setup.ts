import supertest from 'supertest';
//importando supertest
import { server } from '../src/server/Server';
import { Knex } from '../src/server/database/knex';
//importando server

beforeAll( async () => {
    await Knex.migrate.latest(); // estou aguardando o migrate 
});
afterAll(async () => {
    await Knex.destroy(); 
})


export const testserver= supertest(server); // exportando dados

