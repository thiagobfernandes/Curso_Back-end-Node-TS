
import { StatusCodes } from "http-status-codes";
import { testserver } from "../jest.setup";
describe('cidades - Create', () => {

 it('cira registro', async () => {
 const res1 = await testserver.post('/cidades').send({ nome:'tupassi123'});
 expect(res1.statusCode).toEqual(StatusCodes.CREATED);
 expect( typeof res1.body).toEqual('number');
 })

 it('tipo de dados', async () => {
 const res1 = await testserver.post('/cidades').send({ nome:'ca' });
 expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
 expect(res1.body).toHaveProperty('errors.body.nome');  
 });


});