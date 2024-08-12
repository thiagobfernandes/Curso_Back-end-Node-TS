import { StatusCodes } from "http-status-codes";
import { testserver } from "../jest.setup";


describe('Cidade - Getall', () => {

it('pegar todas', async () => {
   const res1 = await testserver.post('/cidades').send({nome:'Tupassi'});
   expect(res1.statusCode).toEqual(StatusCodes.CREATED);
   

   const resBuscada = await testserver.get('/cidades').send();

   expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
   expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
   expect(resBuscada.body.length).toBeGreaterThan(0);

});



});