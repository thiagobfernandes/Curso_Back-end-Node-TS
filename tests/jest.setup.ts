import supertest from 'supertest';
//importando supertest
import { server } from '../src/server/Server';
//importando server



export const testserver= supertest(server); // exportando dados

